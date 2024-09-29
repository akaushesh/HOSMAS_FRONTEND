from rest_framework import serializers
from rest_framework.fields import empty

from .models import *

from slots.serializers import SlotSerializer
from worker.serializers import WorkerSerializer


class CleaningRequestSerializer(serializers.ModelSerializer):
    worker_details = WorkerSerializer(read_only=True, source='worker', exclude_fields=('id', 'hostel_id', 'is_active', 'attendance'))
    slot_details = SlotSerializer(read_only=True, source='slot', exclude_fields=('id', 'hostel_id', 'is_enabled'))

    class Meta:
        model = CleaningRequest
        fields = ('id',
            'student_id',
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
    
    def __init__(self, instance=None, data=empty, **kwargs):
        exclude_fields = kwargs.pop('exclude_fields', [])
        super(CleaningRequestSerializer, self).__init__(instance, data, **kwargs)
        for exclude_field in exclude_fields:
            self.fields.pop(exclude_field)
    

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'