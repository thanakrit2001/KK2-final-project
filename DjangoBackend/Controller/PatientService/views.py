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
            return Response({"message": "No patients found."})
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)