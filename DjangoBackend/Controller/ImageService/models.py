from django.db import models
from PatientService.models import Patients

class Images(models.Model):
    img_id = models.AutoField(primary_key=True)
    date = models.DateField(null=True)
    time = models.CharField(max_length=45, null=True)
    image = models.CharField(max_length=45, null=True)
    patients_id = models.ForeignKey(Patients, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True, null=True)
    updated_date = models.DateTimeField(auto_now=True, null=True)
    created_by = models.CharField(max_length=45, null=True)
    uploaded_by = models.CharField(max_length=45, null=True)
    class Meta:
        managed = False  # กำหนดให้ Django ไม่จัดการการสร้างตารางหรือการทำการ migrate
        db_table = 'images'