# Generated by Django 3.0.7 on 2020-08-16 02:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_auto_20200816_0207'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='enabled',
            field=models.BooleanField(db_column='enabled', default=True, verbose_name='启用'),
        ),
        migrations.AddField(
            model_name='book',
            name='order_by',
            field=models.IntegerField(blank=True, db_column='order_by', default=0, null=True, verbose_name='排序'),
        ),
        migrations.AddField(
            model_name='video',
            name='enabled',
            field=models.BooleanField(db_column='enabled', default=True, verbose_name='启用'),
        ),
        migrations.AddField(
            model_name='video',
            name='order_by',
            field=models.IntegerField(blank=True, db_column='order_by', default=0, null=True, verbose_name='排序'),
        ),
    ]
