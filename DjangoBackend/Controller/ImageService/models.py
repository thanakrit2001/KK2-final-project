from django.db import models
from PatientService.models import Patients

def get_image_upload_path(instance, filename):
        # Customize the upload path based on patients_id
        return f'images/patients_{instance.patients_id.patient_id}/{filename}'

class Images(models.Model):    
    img_id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to=get_image_upload_path, blank=True, null=True)
    predict = models.CharField(max_length=20, null=True)
    patients_id = models.ForeignKey(Patients, on_delete=models.CASCADE , db_column='patients_id')
    created_date = models.DateTimeField(auto_now_add=True, null=True)
    created_by = models.CharField(max_length=45, null=True , default='system')
    updated_date = models.DateTimeField(auto_now=True, null=True)
    uploaded_by = models.CharField(max_length=45, null=True , default='system')
    class Meta:
        managed = False  # กำหนดให้ Django ไม่จัดการการสร้างตารางหรือการทำการ migrate
        db_table = 'images'