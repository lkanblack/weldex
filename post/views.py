from django.shortcuts import render
from django.utils import timezone
from .models import Post

# Create your views here.
def post_list(request):
    posts = Post.objects.all()
    return render(request, 'post/main_page.html', {'posts': posts})
    
def gallery(request):
    return render(request, 'post/gallery.html', {})
    