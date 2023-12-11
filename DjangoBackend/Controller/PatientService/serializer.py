from rest_framework import serializers
from PatientService.models import Patients

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patients
        fields = '__all__'
