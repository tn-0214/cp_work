'use  strict';
$(function(){
	$('.main-slider').slick({
		autoplay: false,
		prevArrow: '<figure class="prev"></figure>',		// ← この行を追加
		nextArrow: '<figure class="next"></figure>'			// ← この行を追加
	});
});