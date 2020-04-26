from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import *
from api.serializers import *


class PatientListAPIView(APIView):
    def get(self, request):
        patients = Patient.objects.all()
        serializer = PatientSerializer(patients, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = PatientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class PatientDetailAPIView(APIView):
    def get_object(self, id):
        try:
            return Patient.objects.get(id=id)
        except Patient.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, patient_id):
        patient = self.get_object(patient_id)
        serializer = PatientSerializer(patient)
        return Response(serializer.data)

    def put(self, request, patient_id):
        patient = self.get_object(patient_id)
        serializer = PatientSerializer(instance=category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    def delete(self, request, Patient_id):
        patient = self.get_object(patient_id)
        patient.delete()

        return Response({'deleted': True})