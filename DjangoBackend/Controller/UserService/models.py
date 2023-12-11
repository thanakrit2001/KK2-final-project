from django.db import models

class Users(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=45, null=True)
    surname = models.CharField(max_length=45, null=True)
    position = models.CharField(max_length=45, null=True)
    email = models.EmailField(max_length=45, null=True)
    password = models.CharField(max_length=45, null=True)
    created_date = models.DateTimeField(auto_now_add=True, null=True)
    updated_date = models.DateTimeField(auto_now=True, null=True)
    created_by = models.CharField(max_length=45, null=True)
    uploaded_by = models.CharField(max_length=45, null=True)
    class Meta:
        managed = False  # กำหนดให้ Django ไม่จัดการการสร้างตารางหรือการทำการ migrate
        db_table = 'users'