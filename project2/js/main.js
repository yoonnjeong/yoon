$(function(){
	$(".tab").click(function(e){
		e.preventDefault();
		$("#m_gnb").addClass("active");
		$("#header .dim").addClass("active");
		$("#header .btn").addClass("active");
	});
	$("#header .btn").click(function(){
		$("#m_gnb").removeClass("active");
		$(".dim").removeClass("active");
		$(this).removeClass("active");

		if($(".sub").hasClass("active")){
			$(".sub").removeClass("active"); 
		}
	});
	$("#m_gnb > ul > li").click(function(e){
		e.preventDefault();
		if($(this).find(".sub").hasClass("active")){
			$(this).find(".sub").removeClass("active");
		}
		else{
			$(".sub").removeClass("active");
			$(this).find(".sub").addClass("active");
		}
	});

	var w;

	$(window).resize(function(){
		w=$(window).width();

		if(w > 720){
			//if($(".dim").hasClass("active")){
			//	$(".dim").trigger("click");
			//}
			$("#m_gnb").removeClass("active");
			$("#header .dim").removeClass("active");
		}
	});
});