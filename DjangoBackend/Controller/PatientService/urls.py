from django.urls import path
from PatientService.views import PatientListView

urlpatterns = [
    path('patientList/', PatientListView, name='patient-list'),
]
