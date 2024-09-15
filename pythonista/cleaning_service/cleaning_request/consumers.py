from datetime import datetime

from django.core.exceptions import ObjectDoesNotExist

from channels.generic.websocket import AsyncJsonWebsocketConsumer
from channels.db import database_sync_to_async

import config.services as common_services

from worker.models import Worker
from .models import CleaningRequest


class WorkerPendingRequestsConsumer(AsyncJsonWebsocketConsumer):

    async def connect(self):
        # get worker's id
        worker_id = self.scope["url_route"]["kwargs"]["worker_id"]
        try:
            worker = await self.get_worker_from_id(worker_id)
        except ObjectDoesNotExist:
            await self.close(code=1008)
            return

        # add the current user to channel group
        await self.channel_layer.group_add(str(worker_id), self.channel_name)

        await self.accept()
        
        initial_data = await self.get_pending_requests_of_worker(worker)
        await self.send_json({
            "type": "initial",
            "data": initial_data
        })

    async def receive_json(self, content):
        pass

    async def disconnect(self, close_code):
        worker_id = self.scope["url_route"]["kwargs"]["worker_id"]
        await self.channel_layer.group_discard(str(worker_id), self.channel_name)

    async def request_assign(self, event):
        await self.send_json({
            "type": "append",
            "id": event["id"],
            "room": event["room"],
            "level": event["level"],
            "block": event["block"],
            "slot": event["slot"]
        })
    
    async def request_done(self, event):
        await self.send_json({
            "type": "remove",
            "id": event["id"],
        })

    @database_sync_to_async
    def get_worker_from_id(self, worker_id):
        return Worker.objects.get(id=worker_id)

    @database_sync_to_async
    def get_pending_requests_of_worker(self, worker):
        cleaning_requests = CleaningRequest.objects.filter(date=datetime.now().date(), worker=worker, status="Assigned").order_by("slot__start").all()
        return [{
            "id": request.id,
            "room": request.room_number,
            "level": request.level,
            "block": request.block,
            "slot": {
                "id": request.slot.id,
                "start_time": request.slot.start.strftime("%H:%M"),
                "end_time": request.slot.end.strftime("%H:%M")
            }
        } for request in cleaning_requests]
