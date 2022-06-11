$(function(){

	//gnb메뉴 고정

	var scrollT=0;

	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT > 100){  
			$("#header").addClass("fixed");
		}
		else{
			$("#header").removeClass("fixed");
		}
	});

	//메인슬라이더
	var swiper = new Swiper(".main_slider .mainSwiper", {
		spaceBetween: 30,
        centeredSlides: true,
		autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
		pagination: {
			el: ".main_slider .swiper-pagination",
			type: "progressbar",
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
		$("body").toggleClass("active");
	});
	

	//page1 menu바
	var bar_swiper1 = new Swiper("#page1 .mySwiper", {
		slidesPerView: 3,
	});

	//page1 new슬라이더
	var new_swiper1 = new Swiper("#page1 .mySwiper1", {
		slidesPerView: 1.4,
		slidesOffsetBefore: 60,
		spaceBetween: 20,
		loop: true,
        pagination: {
          el: "#page1 .swiper-pagination",
          type: "progressbar",
        },
    });


	//page2 배너슬라이더
	var new_swiper2 = new Swiper("#page2 .mySwiper2", {
		slidesPerView: 2,
		slidesOffsetBefore: 100,
		spaceBetween: 25,
		loop: true,
    });

	//page3 PICK슬라이더
	var new_swiper3 = new Swiper("#page3 .mySwiper3", {
		slidesPerView: 1.4,
		slidesOffsetBefore: 60,
		spaceBetween: 20,
		loop: true,
        pagination: {
          el: "#page3 .swiper-pagination",
          type: "progressbar",
        },
    });
});