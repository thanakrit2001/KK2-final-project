from PatientService.models import Patients
from PatientService.serializer import PatientSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['GET'])
def PatientListView(request):
    patients = Patients.objects.all()
    if not patients.exists():
            return Response({"message": "No patients found."} , status=404)
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data , status=200)

@api_view(['GET', 'DELETE'])
def GetPatient_Detail(request,id):
    try:
        patient = Patients.objects.get(pk=id)
    except Patients.DoesNotExist:
        return Response({'error': 'Patient not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = PatientSerializer(patient)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "DELETE":
        patient.delete()
        return Response({'message': 'Patient deleted successfully'}, status=status.HTTP_200_OK)
    
        

@api_view(['POST'])
def CreatePatient(request):
    serializer = PatientSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=201)
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
#     print(m_pred)
#     return Response(m_pred,status=201)