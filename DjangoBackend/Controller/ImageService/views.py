from ImageService.models import Images
from ImageService.serializer import ImagesSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import QueryDict
from django.shortcuts import get_object_or_404

# ml

from tensorflow.keras.models import load_model
import os
import cv2
import numpy as np



# Create your views here.
@api_view(['GET'])
def ImagesListView(request):
    images = Images.objects.all()
    if not images.exists():
            return Response({"message": "No images found."})
    serializer = ImagesSerializer(images, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def GetImage_Detail(request,id):
    try:
        images = Images.objects.filter(patients_id=id)
    except Images.DoesNotExist:
        return Response({'error': 'Patient not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = ImagesSerializer(images, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
   

@api_view(['POST' , 'PUT'])
def UploadImage(request):

    serializer = ImagesSerializer(data=request.data)
    
    if serializer.is_valid():
        if request.method == "PUT":
            query_dict = QueryDict('', mutable=True)
            query_dict.update(serializer.data)
            patients_id = query_dict.get('patients_id')
            patient_images = Images.objects.filter(patients_id=patients_id)
            patient_images.delete()

            serializer = ImagesSerializer(data=request.data)
        if serializer.is_valid():
            instance = serializer.save()
            saved_img_id = instance.img_id
            try:
                image = Images.objects.get(pk=saved_img_id)
            except Images.DoesNotExist:
                return Response(status=status.HTTP_404_NOT_FOUND)

            
            serializer = ImagesSerializer(image)
            query_dict = QueryDict('', mutable=True)
            query_dict.update(serializer.data)
            name_value = query_dict.get('image')
            print(name_value)
            model = load_model('./Machinelearning/improved_model.h5')
            img = cv2.imread(os.path.join('../mediafiles'+name_value), cv2.IMREAD_GRAYSCALE)
            resize = cv2.resize(img, (150, 150))
            resize = np.array(resize) / 255
            resize = resize.reshape(-1, 150, 150, 1)
            m_pred = (model.predict(resize) > 0.5).astype("int32")
            m_pred = m_pred.reshape(1,-1)[0]
            image.predict = m_pred[0]
            image.save()
            serializer = ImagesSerializer(image)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors,status=400)
    return Response(serializer.errors,status=400)




# @api_view(['GET'])
# def getPredict(request,id):
#     try:
#         image = Images.objects.get(pk=id)
#     except Images.DoesNotExist:
#          return Response(status=404)
    
#     serializer = ImagesSerializer(image)
#     query_dict = QueryDict('', mutable=True)
#     query_dict.update(serializer.data)
#     name_value = query_dict.get('image')
#     print(name_value)
#     model = load_model('./Machinelearning/improved_model.h5')
#     img = cv2.imread(os.path.join('../mediafiles'+name_value), cv2.IMREAD_GRAYSCALE)
#     resize = cv2.resize(img, (150, 150))
#     resize = np.array(resize) / 255
#     resize = resize.reshape(-1, 150, 150, 1)
#     m_pred = (model.predict(resize) > 0.5).astype("int32")
#     m_pred = m_pred.reshape(1,-1)[0]
#     result = {
#          "result" : m_pred
#     }
#     print(m_pred)
#     return Response(result,status=201)