from rest_framework import serializers
from ImageService.models import Images
class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Images
        fields = '__all__'