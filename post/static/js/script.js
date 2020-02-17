function burger(){
    let open = document.querySelector('.burger_open'),
        close = document.querySelector('.burger_close'),
        content = document.querySelector('.burger_content'),
        links = content.querySelectorAll('a');

    open.addEventListener('click', function(){
        content.style.display = "block";
        open.style.display = "none";
        close.style.display = "block";
    });

    close.addEventListener('click', function(){
        content.style.display = "none";
        open.style.display = "block";
        close.style.display = "none";
    });

    for(i= 0; i < links.length; i++) {
        links[i].addEventListener('click', function(){
            content.style.display = "none";
            open.style.display = "block";
            close.style.display = "none";
        });
    }
}
burger();