# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-08 23:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dojo_ninjas', '0002_dojo_desc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dojo',
            name='desc',
            field=models.CharField(default=None, max_length=255),
        ),
    ]
