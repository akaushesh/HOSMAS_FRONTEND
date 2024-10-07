from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from collections import defaultdict
from datetime import datetime
import math, requests

from django.conf import settings

import config.services as common_services
from slots.models import Slot
from worker.models import Worker, Attendance

from .models import CleaningRequest


# To assign floors to the workers after daily attendance
def assign_floors_to_workers(hostel_id):
    print('starting assingment', hostel_id)

    response_data = get_hostel_details(hostel_id)

    print('got hostel data ', response_data)
    
    if response_data is None:
        print(f'No hostel data for id {hostel_id}')
        return

    block_floors_dict = parse_hostel_details(response_data)

    print('block floors dict ', block_floors_dict)
    
    workers_list = []
    for worker in common_services.filter_objects(Worker.objects, hostel_id=hostel_id).all():
        attendance = common_services.filter_objects(Attendance.objects, worker=worker, date=datetime.now().date()).first()
        if attendance is not None and attendance.is_present:
            workers_list.append(worker)
    
    print('workers list', workers_list)
    
    workers_per_block = allocate_workers_to_blocks(workers_list, block_floors_dict)

    print('workers per block ', workers_per_block)

    worker_floor_map = construct_worker_floor_assignment_map(block_floors_dict, workers_per_block)

    print('workers floor_map ', worker_floor_map)
    
    mark_floor_assignment_of_workers(worker_floor_map)


def get_hostel_details(hostel_id):
    url = f"{settings.CENTRAL_REPOSITORY_URL}/hostels/{hostel_id}"
    
    response = requests.get(url)
    
    if response.status_code == 200:
        return response.json()
    elif response.status_code == 401:
        print("Invalid Token")
        return None
    else:
        print(f"Failed to fetch hostel details: {response.status_code} {response.text}")
        return None


def parse_hostel_details(response_data):
    block_floors_dict = {}
    
    for block in response_data.get("blocks", []):
        block_name = block["name"]
        levels = block.get("levels", [])
        
        floors = []
        for level in levels:
            level_name = level["name"]
            # for i in range(1, int(level_name) + 1):
            floors.append(level["id"])
        
        block_floors_dict[block_name] = floors
    
    return block_floors_dict


def allocate_workers_to_blocks(workers_list, block_floors_dict):
    total_floors = sum(len(floors) for floors in block_floors_dict.values())
    total_workers = len(workers_list)
    workers_per_block = defaultdict(list)
    
    worker_index = 0
    for block, floors in block_floors_dict.items():
        block_weight = len(floors) / total_floors
        block_workers = math.ceil(block_weight * total_workers)
        workers_per_block[block] = workers_list[worker_index:worker_index + block_workers]
        worker_index += block_workers
        if worker_index >= total_workers:
            break
    
    while worker_index < total_workers:
        for block in block_floors_dict.keys():
            if worker_index < total_workers:
                workers_per_block[block].append(workers_list[worker_index])
                worker_index += 1
            else:
                break
    
    return workers_per_block


def construct_worker_floor_assignment_map(block_floors_dict, workers_per_block):
    worker_floor_map = defaultdict(list)

    worker_index = 0
    for block, floors in block_floors_dict.items():
        block_workers = workers_per_block[block]
        num_block_workers = len(block_workers)
        num_floors = len(floors)
        
        if num_block_workers == 0:
            continue
        elif num_block_workers == 1:
            worker_floor_map[block_workers[0].id].extend(floors)
        else:
            floors_per_worker = math.ceil(num_floors / num_block_workers)
            for i, worker in enumerate(block_workers):
                start = i * floors_per_worker
                end = min((i + 1) * floors_per_worker, num_floors)
                worker_floor_map[worker.id].extend(floors[start:end])
        
        worker_index += num_block_workers
    
    return worker_floor_map


def mark_floor_assignment_of_workers(worker_floor_map):
    for worker_id, floors in worker_floor_map.items():
        attendance_instance = common_services.get_object(Attendance.objects, worker_id=worker_id, date=datetime.now())
        for floor in floors:
            attendance_instance.levels.append(floor)
        attendance_instance.save()


# To assign requests to workers after daily attendance
def assign_requests_to_workers(hostel_id):
    cleaning_requests = common_services.filter_objects(CleaningRequest.objects, status='Pending', hostel_id=hostel_id).all()
    organized_requests = organize_cleaning_requests(cleaning_requests)

    print('organized reqs', organized_requests)

    workers = []
    for worker in common_services.filter_objects(Worker.objects, hostel_id=hostel_id).all():
        attendance = common_services.filter_objects(Attendance.objects, worker=worker, date=datetime.now().date()).first()
        if attendance is not None and attendance.is_present:
            workers.append(worker)
    
    print(workers)

    for worker in workers:
        attendance = common_services.get_object(Attendance.objects, worker=worker, date=datetime.now().date())
        for level_id in attendance.levels:
            for request in organized_requests[level_id]:
                if request.status!='Pending':
                    continue
                for i in range(len(request.preferred_slots)):
                    date = request.preferred_dates[i]
                    if date!=datetime.now().date():
                        continue
                    slot = common_services.get_object(Slot.objects, id=request.preferred_slots[i])
                    
                    if is_worker_available(worker, slot, date):
                        mark_request_assignment_to_worker(request, slot, date, worker)
                        break  # Move to next request after assigning a slot


def organize_cleaning_requests(cleaning_requests):
    organized_requests = defaultdict(list)
    for request in cleaning_requests:
        organized_requests[request.level_id].append(request)
    return organized_requests


def is_worker_available(worker, slot_id, date):
    return CleaningRequest.objects.filter(worker=worker, slot_id=slot_id, date=date).count() <= 5


def mark_request_assignment_to_worker(request, slot, date, worker):
    request.slot = slot
    request.date = date
    request.worker = worker
    request.status = 'Assigned'
    request.save()

    # send message to all websocket clients listening for pending requests of alloted worker
    channel_layer = get_channel_layer()
    async_to_sync(channel_layer.group_send)(str(worker.id), {
        'type': 'request.assign',
        'id': request.id,
        'room': request.room_number,
        'level': request.level,
        'block': request.block,
        'slot': {
            'id': slot.id,
            'start_time': slot.start.strftime("%H:%M"),
            'end_time': slot.end.strftime("%H:%M")
        }
    })


# To assign a worker for an immediate request
def assign_worker_to_request(logger, cleaning_request):
    logger.info(f"Attempting to assign worker for cleaning request {cleaning_request.id}")

    workers = common_services.filter_objects(Worker.objects, hostel_id=cleaning_request.hostel_id, is_active=True).all()
    logger.debug(f"Found {workers.count()} active workers in hostel {cleaning_request.hostel_id}")

    for worker in workers:
        logger.debug(f"Checking availability for worker {worker.id}")
        attendance = common_services.filter_objects(Attendance.objects, worker=worker, date=datetime.now().date()).first()
        
        if attendance and attendance.is_present and cleaning_request.level_id in attendance.levels:
            logger.debug(f"Worker {worker.id} is present and assigned to level {cleaning_request.level_id}")
            for i in range(len(cleaning_request.preferred_slots)):
                slot_id = cleaning_request.preferred_slots[i]
                date = cleaning_request.preferred_dates[i]
                if date!=datetime.now().date():
                    # only try to assign if slot is for same date
                    logger.debug(f"Skipping date {date} for slot id {slot_id}")
                    continue

                slot = common_services.get_object(Slot.objects, id=slot_id)
                logger.debug(f"Checking slot {slot_id} for worker {worker.id}")
                
                if is_worker_available(worker, slot_id, date):
                    logger.info(f"Worker {worker.id} assigned to cleaning request {cleaning_request.id} for slot {slot_id} on {date}")
                    mark_request_assignment_to_worker(cleaning_request, slot, date, worker)
                    return
        else:
            logger.debug(f"Worker {worker.id} is not available for this request")
    
    logger.info(f"No available worker found for cleaning request {cleaning_request.id}")
