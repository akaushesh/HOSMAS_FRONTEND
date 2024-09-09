from rest_framework import serializers
from .models import Worker, Attendance

class WorkerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Worker
        fields = fields = '__all__'

class AttendanceSerializer(serializers.ModelSerializer):
    # worker_name = serializers.CharField(source='worker.name', read_only=True)

    class Meta:
        model = Attendance
        fields = ['id', 'worker', 'date', 'is_present']
