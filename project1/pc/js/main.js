$(function(){

	//네비게이션고정
	var scrollT = 0;

	$(window).scroll(function(){
		scrollT=($(window).scrollTop());

		if(scrollT > 120){
			$("#header").addClass("fixed");
		}
		else {
			$("#header").removeClass("fixed");
		}
	});
	$(window).trigger("scroll");
	
		$("nav > ul > li").hover(
		function(){
			$("nav > ul").addClass("over");
		},
		function(){
			$("nav > ul").removeClass("over");
		}
	);

	//gnb접근성
	$("nav > ul > li").mouseenter(function(){
		$("#header").addClass("over");
	});
	$("#header").mouseleave(function(){
		$("#header").removeClass("over");
	});
	

	$("nav > ul > li:first-child > a").focusin(function(){
		$("#header").addClass("over");
	});
	$("nav li:last-child li:last-child a").focusout(function(){
		$("#header").removeClass("over");
	});

	$("nav > ul > li > a").focusin(function(){
		$(this).parent().addClass("over");
	});
	$("nav li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("over");

	});
	//메인 슬라이더 스와이퍼
	var swiper = new Swiper(".mainSwiper", {
		autoplay: {
			delay: 5000,
		}

	});

	//페이지 2번 오퍼 버튼 스크롤
	$("#page2 .direct .left").click(function(e){
		e.preventDefault();
		$(".offer_list ul").css({left:"0"});
	});
	$("#page2 .direct .right").click(function(e){
		e.preventDefault();
		$(".offer_list ul").css({left:"-450px"});
	});

	//페이지3번 타이틀 스크롤 넘기기
	var bannerN=0; // 0 ~ 5
	var xoffset=2500;
	var xtarget=0;
	var total=6;
	var listN=0; // 0 ~ 1


	$(".title_absolute span").eq(listN).addClass("active");

	$(".title_absolute span").click(function(e){
		e.preventDefault();

		if(listN == $(this).index) return;
		listN=$(this).index();

		var nearN;

		if(listN == 0){
			bannerN=0;
			nearN=1;
		}
		else{
			bannerN=4;
			nearN=3;
		}

		// console.log(listN, bannerN);

		$(".title_absolute span").removeClass("active");
		$(".title_absolute span").eq(listN).addClass("active");

		xtarget=xoffset*nearN*(-1);
		$(".bannerlist .slider_moving ul").css({left:xtarget});

		setTimeout(function(){
			xtarget=xoffset*bannerN*(-1);
			$(".bannerlist .slider_moving ul").animate({left:xtarget}, 300);
		}, 100);
	});

	//페이지 3번 버튼 스크롤 넘기기
	var bannerN=0;
	var xoffset=2500;
	var xtarget=0;
	var total=6;

	$(".bannerlist .direct .prev").click(function(e){
		e.preventDefault();

		if(bannerN > 0){
			bannerN=bannerN-1;
		}
		else{
			return;
		}

		xtarget=xoffset*bannerN*(-1);
		$(".bannerlist .slider_moving ul").animate({left:xtarget}, 300);

		if(bannerN < 4){
			listN=0;
		}
		else{
			listN=1;
		}
		$(".title_absolute span").removeClass("active");
		$(".title_absolute span").eq(listN).addClass("active");
	});
	$(".bannerlist .direct .next").click(function(e){
		e.preventDefault();

		if(bannerN < (total-1)){
			bannerN=bannerN+1;
		}
		else{
			return;
		}

		xtarget=xoffset*bannerN*(-1);
		$(".bannerlist .slider_moving ul").animate({left:xtarget}, 300);

		if(bannerN < 4){
			listN=0;
		}
		else{
			listN=1;
		}
		$(".title_absolute span").removeClass("active");
		$(".title_absolute span").eq(listN).addClass("active");
	});
	
	//페이지4번 투어 컨트롤
	var bannerN1=0;
	var total2=3;

	$("#page4 .direct .prev").click(function(e){
		e.preventDefault();

		if(bannerN1 > 0){
			bannerN1=bannerN1-1;
		}
		else{
			bannerN1=(total2-1);
		}
		showBanner();
	});
	$("#page4 .direct .next").click(function(e){
		e.preventDefault();

		if(bannerN1 < (total2-1)){
			bannerN1=bannerN1+1;
		}
		else{
			bannerN1=0;
		}
		showBanner();
	});

	function showBanner(){
		$("#page4 .banner_list li").each(function(i){
			if(i == bannerN1){
				var obj=$(this);
				obj.show();

				setTimeout(function(){
					obj.addClass("active");
				}, 100);
			}
			else{
				$(this).removeAttr("style").removeClass("active");
			}
		});
	}

	showBanner();

	//페이지5번 스크롤 넘기기
	var banner=0;
	var xoffset=2500;
	var xtarget=0;
	var total1=4;

	$(".eat_banner .direct .prev").click(function(e){
		e.preventDefault();


		if(banner > 0){
			banner=banner-1;
		}
		else{
			return;
		}

		xtarget=xoffset*banner*(-1);
		$(".eat_banner .slider_moving ul").css({left:xtarget});
	});
	$(".eat_banner .direct .next").click(function(e){
		e.preventDefault();
			

		if(banner < (total1-1)){
			banner=banner+1;
		}
		else{
			return;
		}

		xtarget=xoffset*banner*(-1);
		$(".eat_banner .slider_moving ul").css({left:xtarget});
	});
	/*
	var swiper6 = new Swiper(".mainSwiper6", {
		autoplay: {
			delay: 5000,
		}

	});
	*/
	var swiper6 = new Swiper(".mainSwiper6", {
	        slidesPerView: 2,
	        spaceBetween: 30,
		pagination: {
		  el: "#page6 .swiper-pagination",
		  clickable: true,
		},
	});
});