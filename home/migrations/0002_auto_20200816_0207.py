# Generated by Django 3.0.7 on 2020-08-16 02:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hotnews',
            name='cover',
            field=models.ImageField(blank=True, db_column='cover', null=True, upload_to='hotnews', verbose_name='封面'),
        ),
        migrations.AlterField(
            model_name='technicalarticle',
            name='cover',
            field=models.ImageField(blank=True, db_column='cover', null=True, upload_to='techarticle', verbose_name='封面'),
        ),
    ]