'use  strict';
$(function(){
	$('.head-slider').slick({
		autoplay: false,
		arrows: false,
		dots: true	
	});
});

'use  strict';
$(function(){
	$('.shop-slider').slick({
		autoplay: true,
		autoplaySpeed: 0,
        speed:5000,
        cssEase: "linear", //等速にスクロールされる処理表記
        slidesToShow: 3,
        swipe: false,
        arrows: false,
        pauseOnFocus: false, 
        pauseOnHover: false, 
	});
});