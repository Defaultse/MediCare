from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from api.models import *

from api.serializers import *


class DoctorListAPIView(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    # permission_classes = (IsAuthenticated,)


class DoctorDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer


class PatientListAPIView(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer


class PatientDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer


class DoctorPatientAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = DoctorWithPatientSerializer