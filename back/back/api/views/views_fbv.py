from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import *
from api.serializers import *

from back.back.api.models import Doctor, Patient
from back.back.api.serializers import DoctorSerializer1


@api_view(['GET', 'POST'])
def doctor_list(request):
    if request.method == 'GET':
        doctors = Doctor.objects.all()
        serializer = DoctorSerializer1(doctors, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DoctorSerializer1(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
def doctor_detail(request, doctor_id):
    try:
        doctor = Doctor.objects.get(id=doctor_id)
    except Doctor.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = DoctorSerializer1(doctor)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DoctorSerializer1(instance=doctor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        doctor.delete()

        return Response({'deleted': True})


@api_view(['GET', 'POST'])
def patient_list(request):
    if request.method == 'GET':
        patients = Patient.objects.all()
        serializer = DoctorSerializer1(patient, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = DoctorSerializer1(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
def doctor_detail(request, doctor_id):
    try:
        doctor = Doctor.objects.get(id=doctor_id)
    except Doctor.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = DoctorSerializer1(doctor)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = DoctorSerializer1(instance=doctor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        doctor.delete()

        return Response({'deleted': True})