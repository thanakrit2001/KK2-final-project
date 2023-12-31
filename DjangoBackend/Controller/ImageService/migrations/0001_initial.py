# Generated by Django 4.2.8 on 2023-12-11 12:54

import ImageService.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Images',
            fields=[
                ('img_id', models.AutoField(primary_key=True, serialize=False)),
                ('image', models.ImageField(blank=True, null=True, upload_to=ImageService.models.get_image_upload_path)),
                ('predict', models.CharField(max_length=20, null=True)),
                ('created_date', models.DateTimeField(auto_now_add=True, null=True)),
                ('created_by', models.CharField(default='system', max_length=45, null=True)),
                ('updated_date', models.DateTimeField(auto_now=True, null=True)),
                ('uploaded_by', models.CharField(default='system', max_length=45, null=True)),
            ],
            options={
                'db_table': 'images',
                'managed': False,
            },
        ),
    ]
