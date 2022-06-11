$(function(){
	//슬라이더
	var main_swiper = new Swiper(".main_slider .swiper-container", {
		pagination: {
			el: ".main_slider .swiper-pagination",
		},
	});

	//모바일메뉴
	$("#gnb > ul > li").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).find(".sub").slideUp(300);
		}
		else{
			$("#gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#gnb li .sub").slideUp(300);
			$(this).find(".sub").slideDown(300);
		}
	});
	$(".tab").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$("#gnb").toggleClass("active");
		$("#header").toggleClass("active");
		$(".gnb_bottom").toggleClass("active");
		$("body").toggleClass("active");
	});
	
	//페이지2 슬라이더
	var sub_swiper1 = new Swiper("#page2 .mySwiper", {
		spaceBetween: 30,
		centeredSlides: true,
		
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		
		pagination: {
			el: "#page2 .swiper-pagination",
			clickable: true,
		},
	});
	
	//페이지3 슬라이더
	var sub_swiper2 = new Swiper("#page3 .mySwiper3", {
		pagination: {
			el: "#page3 .swiper-pagination",
		},
	});

	//페이지4 banner tab

	$("#page4 li a").click(function(e){
		e.preventDefault();
		$("#page4 li a").find(".default").css({"display":"block"});
		$("#page4 li a").find(".click").css({"display":"none"});
		$(this).find(".default").css({"display":"none"});
		$(this).find(".click").css({"display":"block"});
	});

	//페이지5 슬라이더
	var sub_swiper3 = new Swiper("#page5 .mySwiper5", {
        spaceBetween: 30,
        centeredSlides: true,
		
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
		
        pagination: {
          el: "#page5 .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: "#page5 .swiper-button-next",
          prevEl: "#page5 .swiper-button-prev",
        },
    });
});