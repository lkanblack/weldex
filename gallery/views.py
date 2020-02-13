from django.shortcuts import render
from django.utils import timezone
from .models import Gallery

def gallery_list(request):
    gallerys = Gallery.objects.all()
    return render(request, 'post/gallery.html', {'gallerys':gallerys})