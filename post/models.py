from django.conf import settings
from django.db import models
from django.utils import timezone


class Post(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/')
    text = models.TextField()

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title