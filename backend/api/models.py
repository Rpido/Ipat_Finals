from django.db import models

# Create your models here.

class Item(models.Model):
    #Initial Data 60%
    firstname = models.CharField(max_length=100, null=True)
    middlename = models.CharField(max_length=100, null=True)
    lastname = models.CharField(max_length=100, null=True) 
    contact_no = models.CharField(max_length=100, null=True)
    email = models.CharField(max_length=100, null=True)

    #Additonal Data field
    date_of_birth = models.DateField(blank=True, null=True)
    place_of_birth = models.CharField(max_length=100, blank=True, null=True)
    sex = models.CharField(max_length=10, blank=True, null=True)
    height_m = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    weight_kg = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)

    blood_type = models.CharField(max_length=10, blank=True, null=True)
    civil_status = models.CharField(max_length=20, blank=True, null=True)
    citizenship = models.CharField(max_length=50, blank=True, null=True)
    gsis_no = models.CharField(max_length=20, blank=True, null=True)
    pagibig_no = models.CharField(max_length=20, blank=True, null=True)

    philhealth_no = models.CharField(max_length=20, blank=True, null=True)
    sss_no = models.CharField(max_length=20, blank=True, null=True)
    tin_no = models.CharField(max_length=20, blank=True, null=True)
    father_surname = models.CharField(max_length=100, blank=True, null=True)
    father_first_name = models.CharField(max_length=100, blank=True, null=True)

    father_middle_name = models.CharField(max_length=100, blank=True, null=True)
    mother_surname = models.CharField(max_length=100, blank=True, null=True)
    mother_first_name = models.CharField(max_length=100, blank=True, null=True)
    mother_middle_name = models.CharField(max_length=100, blank=True, null=True)
    permanent_zipcode = models.CharField(max_length=10, blank=True, null=True)

    def __str__(self) -> str:
        full_name = f"{self.firstname or ''} {self.middlename or ''} {self.lastname or ''}".strip()
        return full_name


    