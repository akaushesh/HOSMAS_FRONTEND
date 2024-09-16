from rest_framework import serializers
from rest_framework.fields import empty

from .models import Worker, Attendance


class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = fields = '__all__'
    
    def __init__(self, instance=None, data=empty, **kwargs):
        exclude_fields = kwargs.pop('exclude_fields', [])
        super(WorkerSerializer, self).__init__(instance, data, **kwargs)
        for exclude_field in exclude_fields:
            self.fields.pop(exclude_field)


class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = ['id', 'worker', 'date', 'is_present']
