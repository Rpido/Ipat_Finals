# Generated by Django 5.0.6 on 2024-07-07 08:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_item_blood_type_item_citizenship_item_civil_status_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='permanent_brgy',
            new_name='father_first_name',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='permanent_city',
            new_name='father_surname',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='permanent_province',
            new_name='mother_first_name',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='permanent_street',
            new_name='mother_surname',
        ),
        migrations.RemoveField(
            model_name='item',
            name='permanent_house_no',
        ),
        migrations.RemoveField(
            model_name='item',
            name='permanent_subd',
        ),
        migrations.AddField(
            model_name='item',
            name='mobile_number',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='telephone',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
