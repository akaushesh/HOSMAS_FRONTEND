from rest_framework import serializers
from preference.models import Hostel, RoomType, RoomTypeChoice
from student.models import Batch, Section
import json


class HostelSerializer(serializers.ModelSerializer):
      # Serializer for representing data of all hostels

      available_to = serializers.SerializerMethodField()
      allotment_enabled_for = serializers.SerializerMethodField()

      class Meta:
            model = Hostel
            fields = ['id', 'name', 'gender', 'available_to', 'allotment_enabled_for']

      def get_available_to(self, obj):
            list = []
            for room_type in obj.room_types.all():
                  for choice in room_type.choices.all():
                        list.append(choice.section.batch.name)
            return list
      
      def get_allotment_enabled_for(self, obj):
            list = []
            for room_type in obj.room_types.all():
                  if room_type.is_allotment_enabled:
                        for choice in room_type.choices.all():
                              list.append(choice.section.batch.name)
            return list


class RoomTypeSerializer(serializers.ModelSerializer):
      # Serializer to represent data to admin on hostel side

      available_to = serializers.SerializerMethodField()

      class Meta:
            model = RoomType
            fields = ['id', 'name', 'hostel', 'room_size', 'rooms_count', 'available_to']
            extra_kwargs = {
                  'hostel': {'write_only': True}
            }
      
      def get_available_to(self, obj):
            list = []
            for choice in obj.choices.all():
                  list.append(choice.section.batch.name)
            return list


class HostelSingleSerializer(serializers.ModelSerializer):
      # Serializer for representing data of single hostel

      room_types = RoomTypeSerializer(read_only=True, many=True)
      capacity = serializers.SerializerMethodField()

      class Meta:
            model = Hostel
            fields = ['id', 'name', 'gender', 'caretaker_email', 'caretaker_name', 'room_types', 'capacity']
      
      def get_capacity(self, obj):
            cnt = 0
            for roomtype in obj.room_types.all():
                  cnt += roomtype.room_size * roomtype.rooms_count
            return cnt


class RoomTypeChoiceSerializer(serializers.ModelSerializer):
      room_type_name = serializers.SerializerMethodField()
      hostel = serializers.SerializerMethodField()
      batch = serializers.IntegerField(write_only=True, required=True)
      gender = serializers.CharField(write_only=True, required=True)

      class Meta:
            model = RoomTypeChoice
            fields = ['id', 'hostel', 'room_type', 'room_type_name', 'batch', 'gender', 'capacity']
            extra_kwargs = {
                  'room_type': {'write_only': True},
            }
      
      def get_room_type_name(self, obj):
            return obj.room_type.name
      
      def get_hostel(self, obj):
            return obj.room_type.hostel.name
      
      def validate_gender(self, value):
            if value!='M' and value!='F':
                  raise serializers.ValidationError('Invalid Gender!')
            return value
      
      def validate_batch(self, value):
            if not Batch.objects.filter(id=value).exists():
                  raise serializers.ValidationError('Invalid Batch!')
            return value
      
      def create(self, validated_data):
            batch = Batch.objects.filter(id=validated_data['batch']).first()
            section = Section.objects.filter(batch=batch, gender=validated_data['gender']).first()
            if section is None:
                  section = Section(batch=batch, gender=validated_data['gender'])
                  section.save()
            instance = RoomTypeChoice(
                  room_type = validated_data['room_type'],
                  section = section,
                  capacity = validated_data['capacity']
            )
            instance.save()
            return instance

      def update(self, instance, validated_data):
            batch = Batch.objects.filter(id=validated_data['batch']).first()
            section = Section.objects.filter(batch=batch, gender=validated_data['gender']).first()
            if section is None:
                  raise serializers.ValidationError({'detail': ['Invalid Section!']})
            instance.room_type = validated_data['room_type']
            instance.section = section
            instance.capacity = validated_data['capacity']
            instance.save()
            return instance


class RoomTypeOptionSerializer(serializers.ModelSerializer):
      # Serializer to respresent data to admin about room types availble for allotment

      hostel = serializers.SlugRelatedField(
            slug_field='name',
            read_only=True
      )

      class Meta:
            model = RoomType
            fields = ['id', 'name', 'hostel']


class BatchSerializer(serializers.ModelSerializer):
      gender = serializers.SerializerMethodField()

      class Meta:
            model = Batch
            fields = ['id', 'name', 'gender']
      
      def get_gender(self, obj):
            res = []
            if not Section.objects.filter(batch=obj, gender='F').exists():
                  res.append('Girls')
            if not Section.objects.filter(batch=obj, gender='M').exists():
                  res.append('Boys')
            return res


class SectionSerializer(serializers.ModelSerializer):
      batch = serializers.SlugRelatedField(
            slug_field='name',
            read_only=True
      )
      gender = serializers.SerializerMethodField()

      class Meta:
            model = Section
            fields = ['id', 'batch', 'gender', 'is_allotment_enabled']
      
      def get_batch(self, obj):
            return obj.batch.name
      
      def get_gender(self, obj):
            return 'Boys' if obj.gender=='M' else 'Girls'
