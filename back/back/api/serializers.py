from rest_framework import serializers

from api.models import *


class DoctorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Doctor
        fields = ('id', 'name', 'type_of_activity', 'awards')


class PatientSerializer(serializers.ModelSerializer):
    doctor_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Patient
        fields = ('id', 'name', 'status', 'drugs', 'details', 'doctor_id',)


class DoctorWithPatientSerializer(serializers.ModelSerializer):
    patients = PatientSerializer(many=True, read_only=True)

    class Meta:
        model = Doctor
        fields = ('id', 'name', 'patients')

# class DoctorSerializer1(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     name = serializers.CharField()
#     type_of_activity = serializers.CharField()
#     awards = serializers.CharField()
#
#     def create(self, validated_data):
#         doctor = Doctor.objects.create(name=validated_data.get('name'))
#         return doctor
#
#     def update(self, instance, validated_data):
#         instance.name = validated_data.get('name', instance.name)
#         instance.save()
#         return instance


# class PatientSerializer1(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     name = serializers.CharField()
#     status = serializers.CharField()
#     drugs = serializers.CharField()
#
#     def create(self, validated_data):
#         patient = Patient.objects.create(name=validated_data.get('name'))
#         return patient
#
#     def update(self, instance, validated_data):
#         instance.name = validated_data.get('name', instance.name)
#         instance.save()
#         return instance


