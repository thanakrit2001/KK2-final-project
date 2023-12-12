# from django.shortcuts import render
from UserService.models import Users
from UserService.serializer import UserSerializer
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser 
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
    # Filter out unexpected fields from the request data
    valid_keys = {'name', 'surname', 'position', 'email', 'password', 'created_by', 'uploaded_by'}
    filtered_data = {key: value for key, value in request.data.items() if key in valid_keys}
    print(filtered_data)
    serializer = UserSerializer(data=filtered_data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)



# def ImagesListView(request):
#     images = Images.objects.all()
#     if not images.exists():
#             return Response({"message": "No images found."})
#     serializer = ImagesSerializer(images, many=True)
#     return Response(serializer.data)

