from rest_framework import serializers
from PatientService.models import Patients

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patients
        fields = [
            'patient_id', 'name', 'surname', 'date_of_birth', 'gender', 'phone_number',
            'weight', 'height', 'b_pressure', 'blood_type', 'diagnosis',
            'created_date', 'updated_date', 'created_by', 'uploaded_by', 'medic_person'
        ]

    # def validate(self, data):
    #     # Get the list of fields from the model
    #     model_fields = [field.name for field in Patients._meta.get_fields()]
    #     # Check if all model fields are present in the incoming data
    #     missing_fields = [field for field in model_fields if field not is && field not in data]
    #     if missing_fields:
    #         raise serializers.ValidationError(f"The following fields are required: {', '.join(missing_fields)}")
    #     return data
