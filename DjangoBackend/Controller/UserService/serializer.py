from rest_framework import serializers
from UserService.models import Users

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['name', 'surname', 'position', 'email', 'password', 'created_by', 'uploaded_by']

    def validate(self, data):
        # Get the list of fields from the model
        model_fields = [field.name for field in Users._meta.get_fields()]
        # Check if all model fields are present in the incoming data
        missing_fields = [field for field in model_fields if field not in data]
        if missing_fields:
            raise serializers.ValidationError(f"The following fields are required: {', '.join(missing_fields)}")
        return data