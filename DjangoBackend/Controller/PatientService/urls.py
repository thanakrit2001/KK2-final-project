from django.urls import path
from PatientService.views import PatientListView , GetPatient_Detail , CreatePatient 

urlpatterns = [
    path('', PatientListView),
    path('<int:id>', GetPatient_Detail),
    path('create/', CreatePatient),
]
