# Generated by Django 4.1.7 on 2023-04-03 21:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_brand'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='taxPrice',
        ),
    ]