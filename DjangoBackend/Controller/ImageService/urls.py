from django.urls import path
from ImageService.views import ImagesListView, ImagesDetailView

urlpatterns = [
    path('images/', ImagesListView, name='images-list-create'),
    # path('images/<int:pk>/', ImagesDetailView.as_view(), name='images-detail'),
]





# from django.urls import path
# from patientsService import views

# urlpatterns = [
#     path('list/', views.patients_list),
# ]