$(document).ready(function () {
 	$('.slider').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2
			}
		  },
		  {
			breakpoint: 360,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]

	 });
	 $('.slider__reviews').slick({
		slidesToShow: 2,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 3,
				infinite: true,
			  }
			},
			{
			  breakpoint: 800,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 360,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	 })
	 $('.history__slider').slick({
		slidesToShow: 5,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 3,
				infinite: true,
			  }
			},
			{
				breakpoint: 660,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 2
				}
			  },
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 360,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			  }
			}
		    ]
	 })
	 $('.photos__slider').slick({
		slidesToShow: 9,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 7,
				slidesToScroll: 3,
				infinite: true,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			  }
			}
		    ]
	 })
	 $('.banner__container').slick({
		slidesToShow: 2,
		arrows: false,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true,
			  }
			}
		]
	})
});

$(function () {
	$(".card__btn").click(function () {
		$(this).toggleClass("active");
	})
});
$(function () {
	$(".list__item-btn").click(function () {
		$(this).parent().toggleClass("active");
	})
});
$(function () {
	$(".header__burger").click(function () {
		$(this).parent().toggleClass("burger__active");
	})
});
$(document).ready(function () {
    $('.small a').click(function(e){
        if($('.big img').attr('src')!==$(this).attr('href')){
            $('.big img').hide().attr('src',$(this).attr('href')).fadeIn(1000);
        }
        e.preventDefault();
    })
});