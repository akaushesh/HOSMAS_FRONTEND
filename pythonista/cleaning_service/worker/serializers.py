from rest_framework import serializers
from .models import Worker, Attendance

class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = ['id', 'name', 'phone', 'photo', 'hostel']

class AttendanceSerializer(serializers.ModelSerializer):
    worker_name = serializers.CharField(source='worker.name', read_only=True)

    class Meta:
        model = Attendance
        fields = ['id', 'worker', 'worker_name', 'date', 'is_present']
