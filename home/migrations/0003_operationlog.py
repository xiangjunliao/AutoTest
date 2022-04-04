# Generated by Django 3.1 on 2020-08-24 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_auto_20200816_0207'),
    ]

    operations = [
        migrations.CreateModel(
            name='OperationLog',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('group', models.CharField(db_column='group', default='', max_length=100, verbose_name='分组')),
                ('sub_group', models.CharField(db_column='subgroup', default='', max_length=100, verbose_name='子分组')),
                ('content', models.CharField(db_column='content', default='', max_length=255, verbose_name='内容')),
                ('create_time', models.DateTimeField(auto_now_add=True, db_column='create_time', verbose_name='创建时间')),
                ('create_user', models.CharField(db_column='create_user', default='', max_length=100, verbose_name='用户')),
                ('user_agent', models.CharField(db_column='user_agent', default='', max_length=100, verbose_name='UA')),
            ],
            options={
                'verbose_name': '操作日志',
                'verbose_name_plural': '操作日志',
                'db_table': 'operation_log',
                'managed': True,
            },
        ),
    ]
