$(".burger_open").click(function(){
  $(".burger_content").slideDown("fast");
  $(".burger_open").hide();
  $(".burger_close").show();
});
$(".burger_close").click(function(){
  $(".burger_content").slideUp("fast");
  $(".burger_close").hide();
  $(".burger_open").show();
});

jQuery(".about_descr__name").each(function(){
	var review_full = jQuery(this).html();
	var review = review_full;

	if( review.length > 200 )
	{
		review = review.substring(0, 200);
		jQuery(this).html( review + '<div class="read_more"> Читать полностью;</div>' );
	}
	jQuery(this).append('<div class="full_text" style="display: none;">' + review_full + '</div>');
});

jQuery(".read_more").click(function(){
	jQuery(this).parent().html( jQuery(this).parent().find(".full_text").html() );
});

$(function(){

	$('.main_btn').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
	  e.preventDefault();
	});
	$('#nav_offer').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#service').offset().top }, 1000);
	  e.preventDefault();
	});
	 $('#nav_about').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
	  e.preventDefault();
	});
	 $('#nav_projects').on('click', function(e){
	  $('html,body').stop().animate({ scrollTop: $('#projects').offset().top }, 1000);
	  e.preventDefault();
	});
	$('#nav_contact').on('click', function(e){
	 $('html,body').stop().animate({ scrollTop: $('#contact').offset().top }, 1000);
	 e.preventDefault();
   });
	});
   

// autoplay

const autoplay = () => {
	let	video = document.getElementById('myVideo');
	let width = screen.width;

	if(width <= 600){
		video.removeAttribute('autoplay');
	}

}

autoplay();

// cookies 

const cookies = () => {
	let cookie_bar = document.getElementsByClassName('cookie-bar__message');
	console.log(cookie_bar.value);
}

cookies();
