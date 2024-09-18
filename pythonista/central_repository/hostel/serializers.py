from rest_framework import serializers

from .models import Hostel, Block, Level


class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Level
        fields = ("id", "name")


class BlockSerializer(serializers.ModelSerializer):
    levels = LevelSerializer(many=True, read_only=True)

    class Meta:
        model = Block
        fields = ("id", "name", "levels")


class HostelSerializer(serializers.ModelSerializer):
    blocks = BlockSerializer(many=True, read_only=True)

    class Meta:
        model = Hostel
        fields = ("id", "name", "image_url", "blocks")
