from ImageService.models import Images
from ImageService.serializer import ImagesSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['GET'])
def ImagesListView(request):
    images = Images.objects.all()
    if not images.exists():
            return Response({"message": "No images found."})
    serializer = ImagesSerializer(images, many=True)
    return Response(serializer.data)

# @api_view(['GET'])
# def ImageDetailView(request):