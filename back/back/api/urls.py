from django.urls import path

from api.views import *

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [

    path('login/', obtain_jwt_token),

    path('doctor/', DoctorListAPIView.as_view()),
    path('doctor/<int:pk>/', DoctorDetailAPIView.as_view()),

    path('patients/', PatientListAPIView.as_view()),
    path('patients/<int:pk>/', PatientDetailAPIView.as_view()),

]