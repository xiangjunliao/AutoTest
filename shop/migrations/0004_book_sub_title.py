# Generated by Django 3.0.7 on 2020-08-23 03:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0003_auto_20200816_0211'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='sub_title',
            field=models.CharField(blank=True, db_column='sub_title', max_length=100, null=True, verbose_name='副标题'),
        ),
    ]
