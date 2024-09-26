from rest_framework import serializers
from rest_framework.fields import empty

from .models import Slot

class SlotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slot
        fields = '__all__'
    
    def __init__(self, instance=None, data=empty, **kwargs):
        exclude_fields = kwargs.pop('exclude_fields', [])
        super(SlotSerializer, self).__init__(instance, data, **kwargs)
        for exclude_field in exclude_fields:
            self.fields.pop(exclude_field)