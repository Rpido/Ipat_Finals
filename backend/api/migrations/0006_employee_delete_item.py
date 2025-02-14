# Generated by Django 5.0.6 on 2024-07-04 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_item_phone'),
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=100, null=True)),
                ('middlename', models.CharField(max_length=100, null=True)),
                ('lastname', models.CharField(max_length=100, null=True)),
                ('contact_no', models.CharField(max_length=100, null=True)),
                ('email', models.CharField(max_length=100, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='Item',
        ),
    ]
