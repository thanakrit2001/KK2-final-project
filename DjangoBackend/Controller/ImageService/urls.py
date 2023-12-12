from django.urls import path
from ImageService.views import UploadImage,GetImage_Detail

urlpatterns = [
    path('upload/', UploadImage),
    path('<int:id>', GetImage_Detail),
    # path('images/<int:pk>/', ImagesDetailView.as_view(), name='images-detail'),
]





# from django.urls import path
# from patientsService import views

# urlpatterns = [
#     path('list/', views.patients_list),
# ]