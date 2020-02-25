from django.shortcuts import render
from django.utils import timezone
from .models import Post
from .models import Gallery

# Create your views here.
def post_list(request):
    posts = Post.objects.all()
    return render(request, 'post/main_page.html', {'posts': posts})
    
def gallery(request):
    gallerys = Gallery.objects.all()
    return render(request, 'post/gallery.html', {'gallerys': gallerys})
    

def rus(request):
    russians = Post.objects.all()
    return render(request, 'post/rus.html', {'russians': russians})


def eng(request):
    engs = Post.objects.all()
    return render(request, 'post/eng.html', {'engs': engs})