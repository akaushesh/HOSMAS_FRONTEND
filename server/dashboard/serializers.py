from rest_framework.serializers import ModelSerializer, SlugRelatedField, StringRelatedField, PrimaryKeyRelatedField, SerializerMethodField
from preference.models import Hostel, RoomType, RoomTypeChoice
from student.models import Batch


class HostelSerializer(ModelSerializer):
      room_types = SlugRelatedField(
            slug_field='name',
            read_only=True,
            many=True
      )

      class Meta:
            model = Hostel
            fields = ['id', 'name', 'room_types']


class RoomTypeSerializer(ModelSerializer):
      hostel_name = SerializerMethodField()

      class Meta:
            model = RoomType
            fields = ['id', 'name', 'hostel_name', 'hostel']
            extra_kwargs = {
                  'hostel': {'write_only': True}
            }
      
      def get_hostel_name(self, obj):
            return obj.hostel.name


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
