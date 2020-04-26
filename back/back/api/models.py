from django.db import models


# Relations between tables
# - One to One ### 1 User - 1 Profile
# - One to Many ### 1 Category contains - many Products


class Doctor(models.Model):
    name = models.CharField(max_length=300)
    type_of_activity = models.CharField(max_length=200)
    awards = models.CharField(max_length=500)

    class Meta:
        verbose_name = 'Doctor'
        verbose_name_plural = 'Doctors'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'type_of_activity': self.type_of_activity,
            'awards': self.awards
        }


class Patient(models.Model):
    name = models.CharField(max_length=300)
    status = models.TextField(default='')
    drugs = models.TextField(default='')
    details = models.TextField(default='')
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE,
                               related_name='patients')

    def __str__(self):
        return f'Patient id={self.id}, name={self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'status': self.status,
            'drugs': self.drugs,
            'details': self.details
        }
