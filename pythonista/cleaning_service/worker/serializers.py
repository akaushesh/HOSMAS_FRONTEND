from rest_framework import serializers
from rest_framework.fields import empty

from .models import Worker, Attendance
import config.services as common_services


class WorkerSerializer(serializers.ModelSerializer):
    attendance = serializers.SerializerMethodField()

    class Meta:
        model = Worker
        fields = fields = ('id', 'name', 'phone', 'photo', 'hostel_id', 'is_active', 'attendance')
    
    def __init__(self, instance=None, data=empty, **kwargs):
        exclude_fields = kwargs.pop('exclude_fields', [])
        super(WorkerSerializer, self).__init__(instance, data, **kwargs)
        for exclude_field in exclude_fields:
            self.fields.pop(exclude_field)
    
    def get_attendance(self, obj):
        date = self.context['attendance_date']
        instance = common_services.filter_objects(Attendance.objects, worker=obj, date=date).first()
        if instance is None:
            return None
        return AttendanceSerializer(instance, exclude_fields=('id', 'date', 'worker')).data


class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = ['id', 'worker', 'date', 'is_present', 'levels']
    
    def __init__(self, instance=None, data=empty, **kwargs):
        exclude_fields = kwargs.pop('exclude_fields', [])
        super(AttendanceSerializer, self).__init__(instance, data, **kwargs)
        for exclude_field in exclude_fields:
            self.fields.pop(exclude_field)
