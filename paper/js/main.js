$(document).ready(function () {
 	$('.slider').slick({
		 arrows:false,
		   	infinite: true,
  			slidesToShow: 5,
  			slidesToScroll: 5
	 }) 
});
$(function () {
	$(".language-btn").click(function () {
		$(this).parent().toggleClass("active");
	})
});