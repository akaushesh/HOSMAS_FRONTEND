import requests
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.utils import timezone
from datetime import datetime, timedelta
from .models import CleaningRequest, Worker, Hostel, Room
from .serializers import CleaningRequestSerializer
from .utils import filter_objects, ResponsePagination
from collections import defaultdict
import math

# Assign duties to workers for the day
class AssignDuties(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        email = "temp@thapar.edu"
        password = "password"
        hostel_id = 1  # Replace with the actual hostel ID
        
        jwt_token = self.get_jwt_token(email, password)
        
        if jwt_token:
            response_data = self.get_hostel_details(jwt_token, hostel_id)
            
            if response_data:
                block_floors_dict = self.parse_hostel_details(response_data)
                workers_list = ["worker1", "worker2", "worker3", "worker4", "worker5"]
                
                result = self.assign_floors_to_workers(workers_list, block_floors_dict)
                return Response(result, status=status.HTTP_200_OK)
        
        return Response({"error": "Unable to fetch data"}, status=status.HTTP_400_BAD_REQUEST)

    def get_jwt_token(self, email, password):
        token_url = 'https://central.hosmas.ccstiet.com/token/'
        payload = {
            "email": email,
            "password": password
        }
        headers = {
            'Content-Type': 'application/json'
        }
        
        response = requests.post(token_url, json=payload, headers=headers)
        
        if response.status_code == 200:
            token_data = response.json()
            return token_data.get('access')
        else:
            print(f"Failed to get token: {response.status_code} {response.text}")
            return None

    def get_hostel_details(self, jwt_token, hostel_id):
        url = f"{settings.CENTRAL_REPOSITORY_URL}/hostels/{hostel_id}"
        headers = {
            "Authorization": f"Bearer {jwt_token}"
        }
        
        response = requests.get(url, headers=headers)
        
        if response.status_code == 200:
            return response.json()
        elif response.status_code == 401:
            print("Invalid Token")
            return None
        else:
            print(f"Failed to fetch hostel details: {response.status_code} {response.text}")
            return None

    def parse_hostel_details(self, response_data):
        block_floors_dict = {}
        
        for block in response_data.get("blocks", []):
            block_name = block["name"]
            levels = block.get("levels", [])
            
            floors = []
            for level in levels:
                level_name = level["name"]
                for i in range(1, int(level_name) + 1):
                    floors.append(f'{block_name}{i}')
            
            block_floors_dict[block_name] = floors
        
        return block_floors_dict

    def assign_floors_to_workers(self, workers_list, block_floors_dict):
        total_floors = sum(len(floors) for floors in block_floors_dict.values())
        total_workers = len(workers_list)
        worker_floor_map = defaultdict(list)
        
        workers_per_block = self.allocate_workers_to_blocks(workers_list, block_floors_dict)
        
        worker_index = 0
        for block, floors in block_floors_dict.items():
            block_workers = workers_per_block[block]
            num_block_workers = len(block_workers)
            num_floors = len(floors)
            
            if num_block_workers == 0:
                continue
            elif num_block_workers == 1:
                worker_floor_map[block_workers[0]].extend(floors)
            else:
                floors_per_worker = math.ceil(num_floors / num_block_workers)
                for i, worker in enumerate(block_workers):
                    start = i * floors_per_worker
                    end = min((i + 1) * floors_per_worker, num_floors)
                    worker_floor_map[worker].extend(floors[start:end])
            
            worker_index += num_block_workers
        
        return dict(worker_floor_map)

    def allocate_workers_to_blocks(self, workers_list, block_floors_dict):
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

# assign cleaning requests to workers
class AssignCleaningRequestsToWorkers(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        hostel_id = self.get_hostel_id(request)
        
        hostel_data = self.preload_hostel_data(hostel_id)
        cleaning_requests = self.get_cleaning_requests(request, hostel_id)
        organized_requests = self.organize_cleaning_requests(cleaning_requests, hostel_data)

        workers = Worker.objects.filter(hostel_id=hostel_id)

        assignments = self.assign_requests_to_workers(workers, organized_requests, hostel_data)

        self.store_assignments(assignments)

        return Response({"message": "Cleaning requests assigned successfully"}, status=status.HTTP_200_OK)

    def get_hostel_id(self, request):
        if request.user['role'] == 'supervisor':
            return request.user['supervisor']['hostel']['id']
        return None

    def preload_hostel_data(self, hostel_id):
        hostel = Hostel.objects.get(id=hostel_id)
        blocks = hostel.blocks.all()
        hostel_data = defaultdict(lambda: defaultdict(list))

        for block in blocks:
            for floor in block.floors.all():
                rooms = Room.objects.filter(floor=floor)
                for room in rooms:
                    hostel_data[block.name][floor.number].append(room.number)

        return hostel_data

    def get_cleaning_requests(self, request, hostel_id):
        filters = request.query_params.dict()
        page = filters.pop('page', None)
        page_size = filters.pop('page_size', None)

        if request.user['role'] == 'student':
            cleaning_requests = filter_objects(CleaningRequest.objects, **filters, student__hostel_id=hostel_id)
        elif request.user['role'] == 'supervisor':
            cleaning_requests = filter_objects(CleaningRequest.objects, **filters, hostel_id=hostel_id)

        paginator = ResponsePagination()
        paginated_queryset = paginator.paginate_queryset(cleaning_requests, request)

        serializer = CleaningRequestSerializer(paginated_queryset, many=True)
        return serializer.data

    def organize_cleaning_requests(self, cleaning_requests, hostel_data):
        organized_requests = defaultdict(lambda: defaultdict(lambda: defaultdict(list)))
        for request in cleaning_requests:
            block = request['block']
            floor = request['floor']
            room = request['room']
            if room in hostel_data[block][floor]:
                organized_requests[block][floor][room].append(request)
        return organized_requests

    def assign_requests_to_workers(self, workers, organized_requests, hostel_data):
        assignments = {}
        for worker in workers:
            assignments[worker.id] = self.assign_requests_to_worker(worker, organized_requests, hostel_data)
        return assignments

    def assign_requests_to_worker(self, worker, organized_requests, hostel_data):
        worker_assignments = []
        worker_schedule = self.initialize_worker_schedule()

        block_requests = organized_requests.get(worker.assigned_block, {})
        floor_requests = block_requests.get(worker.assigned_floor, {})

        for room, requests in floor_requests.items():
            for request in requests:
                for slot in request['slots']:
                    start_time = datetime.strptime(slot['start_time'], "%H:%M").time()
                    end_time = datetime.strptime(slot['end_time'], "%H:%M").time()
                    
                    if self.is_worker_available(worker_schedule, start_time, end_time):
                        worker_assignments.append({
                            'room': room,
                            'start_time': start_time,
                            'end_time': end_time
                        })
                        self.mark_slot_occupied(worker_schedule, start_time, end_time)
                        break  # Move to next request after assigning a slot

        return worker_assignments

    def initialize_worker_schedule(self):
        schedule = {}
        start = datetime.strptime("08:00", "%H:%M").time()
        end = datetime.strptime("18:00", "%H:%M").time()
        current = start
        while current < end:
            schedule[current] = False  # False means the slot is available
            current = (datetime.combine(datetime.today(), current) + timedelta(minutes=30)).time()
        return schedule

    def is_worker_available(self, schedule, start_time, end_time):
        current = start_time
        while current < end_time:
            if schedule[current]:
                return False
            current = (datetime.combine(datetime.today(), current) + timedelta(minutes=30)).time()
        return True

    def mark_slot_occupied(self, schedule, start_time, end_time):
        current = start_time
        while current < end_time:
            schedule[current] = True
            current = (datetime.combine(datetime.today(), current) + timedelta(minutes=30)).time()

    def store_assignments(self, assignments):
        for worker_id, worker_assignments in assignments.items():
            print(f"Worker {worker_id} assignments:")
            for assignment in worker_assignments:
                print(f"  Room: {assignment['room']}, Time: {assignment['start_time']} - {assignment['end_time']}")

# Usage
# view = AssignCleaningRequestsToWorkers()
# view.get(request)  # where request is a DRF Request object

# Usage
# view = AssignDuties()
# response = view.get(request)  # where request is a DRF Request object
