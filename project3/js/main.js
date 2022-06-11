$(function(){

	//슬라이더
	var n=0;
	$(".slider_moving li").eq(n).addClass("current");
	$(".pagination li").eq(n).addClass("current");

	$(".pagination li").click(function(e){ 
		e.preventDefault(); 

		n=$(this).index();

		$(".pagination li").removeClass("current");
		$(this).addClass("current");
		$(".slider_moving li").removeClass("current");
		$(".slider_moving li").eq(n).addClass("current");
	});

	$(".btn .left").click(function(e){
		e.preventDefault(); 
		if(n > 0){
			n=n-1;
		}
		else{
			n=3;
		}
		$(".pagination li").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
		$(".slider_moving li").removeClass("current");
		$(".slider_moving li").eq(n).addClass("current");
	});
	$(".btn .right").click(function(e){
		e.preventDefault();

		if(n < 3){
			n=n+1;
		}
		else{
			n=0;
		}
		$(".pagination li").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
		$(".slider_moving li").removeClass("current");
		$(".slider_moving li").eq(n).addClass("current");
	});

	//gnb접근성

	$("#gnb .gnb_inner > ul > li").hover(
		function(){
			$("#gnb").addClass("over");
		},
		function(){
			$("#gnb").removeClass("over");
		}
	);


	$("nav ul > li:first-child > a").focusin(function(){
		$("#gnb").addClass("over");
	});
	$("nav li:last-child li:last-child a").focusout(function(){
		$("#gnb").removeClass("over");
	});
	$("nav li li > a").focusin(function(){
		$(this).parent().addClass("over");
	});
	$("nav li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("over");
	});

	$("#gnb .gnb_inner > ul > li > a").focusin(function(){
		$(this).parent().addClass("over");
	});
	$("#gnb .gnb_inner > ul > li > a").focusout(function(){
		$(this).parent().prev().removeClass("over");
	});
});