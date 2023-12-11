from django.urls import path
from UserService.views import UserListView,UserCreateView

urlpatterns = [
    path('list/', UserListView),
    path('a/', UserCreateView),
]