# Generated by Django 3.1 on 2020-10-03 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_auto_20201002_2316'),
    ]

    operations = [
        migrations.AlterField(
            model_name='operationlog',
            name='user_agent',
            field=models.CharField(db_column='user_agent', default='', max_length=255, verbose_name='UA'),
        ),
    ]
