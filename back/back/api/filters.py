from django_filters import rest_framework as filters


from api.models import Patient


class PatientFilter(filters.FilterSet):
    doctor_id = filters.CharFilter(lookup_expr='exact')

    class Meta:
        model = Patient
        fields = ('doctor_id', )