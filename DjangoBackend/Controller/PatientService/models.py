from django.db import models
from UserService.models import Users

# Create your models here.
class Patients(models.Model):
    patient_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, null=True)
    surname = models.CharField(max_length=45, null=True)
    date_of_birth = models.DateField(null=True)
    gender = models.CharField(max_length=5, null=True)
    phone_number = models.CharField(max_length=10, null=True)
    weight = models.CharField(max_length=10, null=True)
    height = models.CharField(max_length=10, null=True)
    b_pressure = models.CharField(max_length=10, null=True)
    blood_type = models.CharField(max_length=5, null=True)
    diagnosis = models.TextField(null=True)
    created_date = models.DateTimeField(null=True)
    updated_date = models.DateTimeField(null=True)
    created_by = models.CharField(max_length=45, null=True)
    uploaded_by = models.CharField(max_length=45, null=True)
    medic_person = models.ForeignKey(Users, on_delete=models.CASCADE)
    class Meta:
        managed = False  # กำหนดให้ Django ไม่จัดการการสร้างตารางหรือการทำการ migrate
        db_table = 'patients' 
