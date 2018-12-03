


$(document).ready(function(){
	$('a.scroll-to').on('click',function () { 
		var elementClick = $(this).attr("href");
		var elementArr = elementClick.split("#");
		
		destination =  $("#"+ elementArr[1]).offset().top;
		
		$("html, body").animate( { scrollTop: destination }, 1100 );

		return false;
	});
	
	$('.number-roll').each(function (){
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 10000,
			easing: 'swing',
			step:function(now){
				$(this).text(Math.ceil(now));
			}
		});
	});
	$('.big-slider').slick({
		arrows:true,
		autoplay:true,
		autoplaySpeed:3000,
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>'
	});
	$('.cat-big-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:true,
		nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
		fade: true,
		asNavFor: '.cat-lil-slider'
	});
	$('.cat-lil-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows:false,
		asNavFor: '.cat-big-slider',
		centerMode: true,
		focusOnSelect: true
	});
});