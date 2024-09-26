from rest_framework import serializers

from .models import *

from slots.serializers import SlotSerializer
from worker.serializers import WorkerSerializer


class CleaningRequestSerializer(serializers.ModelSerializer):
    worker_details = WorkerSerializer(read_only=True, source='worker')
    slot_details = SlotSerializer(read_only=True, source='slot')

    class Meta:
        model = CleaningRequest
        fields = ('student_id',
            'room_id',
            'hostel_id',
            'level_id',
            'hostel_name',
            'block',
            'level',
            'room_number',
            'preferred_slots',
            'preferred_dates',
            'status',
            'worker',
            'worker_details',
            'slot',
            'slot_details',
            'date'
        )
    

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'