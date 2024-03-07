from django.core.exceptions import ObjectDoesNotExist
from django.db import transaction

from channels.consumer import AsyncConsumer
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from channels.exceptions import DenyConnection
from channels.db import database_sync_to_async

from .models import Room, Level
from student.models import Student
from .serializers import RoomSerializer, StudentAllotedRoomSerializer


@database_sync_to_async
def get_initial_room_objects(user, level):
    level_instance = Level.objects.filter(hostel=user.student.alloted_room.hostel, level_no=level).first()
    qs = Room.objects.filter(room_type=user.student.alloted_room, level=level_instance, can_allot=True)
    serializer = RoomSerializer(qs, many=True)
    return serializer.data


@database_sync_to_async
def check_if_user_is_group_leader(user):
    try:
        user.student
        user.student.leader_of_group
        return user.student.alloted_room is not None
    except ObjectDoesNotExist:
        return False


@database_sync_to_async
def get_alloted_room_type_id_of_student(user):
    return user.student.alloted_room.id


@database_sync_to_async
def allot_room(arr, user):
    group_instance = user.student.leader_of_group
    group_leader = user.student

    cp_mp = {}
    for item in arr:
        if cp_mp.get(item['room'], False):
            avl_cap = cp_mp[item['room']]
        else:
            room_instance = Room.objects.filter(id=item['room']).first()
            if room_instance is None:
                return {
                    'type': 'error',
                    'message': f'No room found with id {item["room"]}'
                }
            avl_cap = room_instance.current_capacity
        if avl_cap==0:
            return {
                'type': 'error',
                'message': f'Capacity exceeded for room {item["room"]}'
            }
        cp_mp[item['room']] = avl_cap - 1
        student_instance = Student.objects.filter(rollno=item['student']).first()
        if student_instance is None or (student_instance!=group_leader and student.group!=group_instance):
            return {
                'type': 'error',
                'message': f'No student found with roll number {item["student"]}'
            }
    
    res = {
        'type': 'success',
        'updates': {}
    }

    with transaction.atomic():
        for item in arr:
            student_instance = Student.objects.filter(rollno=item['student']).first()

            if student_instance.alloted_room_number is not None:
                prev_room_instance = student_instance.alloted_room_number
                prev_room_instance.current_capacity += 1
                prev_room_instance.save()
                res['updates'][prev_room_instance.id] = RoomSerializer(prev_room_instance).data
            
            student_instance.alloted_room_number = room_instance
            student_instance.save()

            room_instance = Room.objects.filter(id=item['room']).first()
            room_instance.current_capacity -= 1
            room_instance.save()
            res['updates'][room_instance.id] = RoomSerializer(instance=room_instance).data
    
    return res


@database_sync_to_async
def get_allotment_results(arr):
    res = []
    for item in arr:
        student_instance = Student.objects.filter(rollno=item['student']).first()
        res.append(StudentAllotedRoomSerializer(student_instance).data)
    return res


class RoomPreferenceConsumer(AsyncJsonWebsocketConsumer):

    async def connect(self):
        # check if user is authenticated
        user = self.scope['user']
        if user.is_anonymous or not await check_if_user_is_group_leader(user):
            raise DenyConnection
        
        # get user's preffered floor
        level = self.scope['url_route']['kwargs']['level']

        room_type_id = await get_alloted_room_type_id_of_student(user)

        # add the current user to channel group
        await self.channel_layer.group_add(f'{room_type_id}.{level}', self.channel_name)

        await self.accept()
        
        initial_data = await get_initial_room_objects(user, level)
        await self.send_json({
            'type': 'initial',
            'data': initial_data
        })

    async def receive_json(self, content):
        if not isinstance(content, list):
            await self.send_json({
                'type': 'error',
                'message': 'Invalid data type!'
            })
            return
        
        for item in content:
            if item.get('room') is None or item.get('student') is None:
                await self.send_json({
                    'type': 'error',
                    'message': 'Invalid data type!'
                })
                return

        user = self.scope['user']
        level = self.scope['url_route']['kwargs']['level']
        
        res = await allot_room(content, user)

        if res['type']=='error':
            await self.send_json(res)
            return
        
        updates = []
        for item in res['updates'].values():
            updates.append(item)

        await self.channel_layer.group_send(
            f"{user.student.alloted_room.id}.{level}",
            {
                'type': 'group.send',
                'updates': updates
            })
        
        allotment_data = await get_allotment_results(content)
        await self.send_json({
            'type': 'result',
            'result': allotment_data
        })

    async def disconnect(self, close_code):
        print(close_code)
    
    async def group_send(self, event):
        await self.send_json({
            'type': 'update',
            'updates': event.get('updates')
        })