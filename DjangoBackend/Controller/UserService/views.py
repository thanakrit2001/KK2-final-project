# from django.shortcuts import render
from UserService.models import Users
from UserService.serializer import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['GET'])
def UserListView(request):
    users = Users.objects.all()
    print(users)
    if not users.exists():
        return Response(status=404)
    serializer = UserSerializer(users,many=True)
    return Response(serializer)
@api_view(['GET'])
def user_get(request,id):
    user = Users.objects.get(pk=id)
    serializer = UserSerializer(user)
    return Response(serializer.data,status)

@api_view(['POST'])
def UserCreateView(request):
    print(request.data)
    serializer = UserSerializer(data=request.data)
    print(serializer.is_valid())
    if serializer.is_valid():
         serializer.save()
         return Response(serializer.data,status=201)
    return Response(serializer.error,status=400)



# def ImagesListView(request):
#     images = Images.objects.all()
#     if not images.exists():
#             return Response({"message": "No images found."})
#     serializer = ImagesSerializer(images, many=True)
#     return Response(serializer.data)

