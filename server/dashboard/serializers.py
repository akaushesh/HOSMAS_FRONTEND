from rest_framework.serializers import ModelSerializer, SlugRelatedField, StringRelatedField, PrimaryKeyRelatedField, SerializerMethodField
from preference.models import Hostel, RoomType, RoomTypeChoice
from student.models import Batch


class HostelSerializer(ModelSerializer):
      # Serializer for representing data of all hostels
      available_to = SerializerMethodField()
      allotment_enabled_for = SerializerMethodField()

      class Meta:
            model = Hostel
            fields = ['id', 'name', 'gender', 'available_to', 'allotment_enabled_for']

      def get_available_to(self, obj):
            list = []
            for room_type in obj.room_types.all():
                  for choice in room_type.choices.all():
                        list.append(choice.batch.name)
            return list
      
      def get_allotment_enabled_for(self, obj):
            list = []
            for room_type in obj.room_types.all():
                  if room_type.is_allotment_enabled:
                        for choice in room_type.choices.all():
                              list.append(choice.batch.name)
            return list


class RoomTypeSerializer(ModelSerializer):
      available_to = SerializerMethodField()

      class Meta:
            model = RoomType
            fields = ['id', 'name', 'hostel', 'room_size', 'rooms_count', 'is_allotment_enabled', 'available_to']
            extra_kwargs = {
                  'hostel': {'write_only': True}
            }
      
      def get_available_to(self, obj):
            list = []
            for choice in obj.choices.all():
                  list.append(choice.batch.name)
            return list


class HostelSingleSerializer(ModelSerializer):
      # Serializer for representing data of single hostel
      room_types = RoomTypeSerializer(read_only=True, many=True)
      capacity = SerializerMethodField()

      class Meta:
            model = Hostel
            fields = ['id', 'name', 'gender', 'caretaker_email', 'caretaker_name', 'room_types', 'capacity']
      
      def get_capacity(self, obj):
            cnt = 0
            for roomtype in obj.room_types.all():
                  cnt += roomtype.room_size * roomtype.rooms_count
            return cnt


class RoomTypeChoiceSerializer(ModelSerializer):
      room_type_name = SerializerMethodField()
      batch_name = SerializerMethodField()
      gender_text = SerializerMethodField()

      class Meta:
            model = RoomTypeChoice
            fields = ['id', 'room_type', 'room_type_name', 'batch', 'batch_name', 'capacity', 'gender', 'gender_text']
            extra_kwargs = {
                  'room_type': {'write_only': True},
                  'batch': {'write_only': True},
                  'gender': {'write_only': True},
            }
      
      def get_room_type_name(self, obj):
            return obj.room_type.name
      
      def get_batch_name(self, obj):
            return obj.batch.name
      
      def get_gender_text(self, obj):
            return 'Female' if obj.gender=='F' else 'Male'


class BatchSerializer(ModelSerializer):
      class Meta:
            model = Batch
            fields = ['id', 'name']
