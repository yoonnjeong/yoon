$(function(){
	//페럴렉스 스크롤
	var n=0//카테고리번호
	var h;//윈도우 높이정보
	var pos=0;//윈도위 목표지점변수
	var timer=0;//휠타이머변수

	function init(){
		$("#main").addClass("active");
		$("#gnb li").eq(n).children().addClass("active");
	}
	init();

	var w, h, winHalf;

	$(window).resize(function(){
		clearTimeout(timer);
		w=$(window).width();
		h=$(window).height();
		winHalf=h/2;

		timer=setTimeout(function(){
			h=$(window).height();
			pos=n*h;
			$("html").stop().animate({scrollTop:pos}, 800);
		}, 100); //0.1
	});
	$(window).trigger("resize");
	// $(window).trigger("mousewheel");

	$(".wrapper").mousewheel(function(e, delta){
		if($("html").is(":animated") || w <= 970) return;

		$("#m_gnb").removeClass("active");
		$("#header .dim").removeClass("active");
		$("#main .btn").removeClass("active");

		if(delta > 0){
			if(n > 0){ 
				n=n-1;
			}
		}
		else{
			if(n < 5){
				n=n+1; 
			}
		}
		pos=n*h;

		$("html").stop().animate({scrollTop:pos}, 800, function(){
			$("#gnb li").children().removeClass("active");
			$("#gnb li").eq(n).children().addClass("active");
			$(".wrapper > *").removeClass("active");
			$(".wrapper > *").eq(n).addClass("active");
		});
	});

	//gnb상단고정
	var scrollT=0;
	var scrollTimer=0;

	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT > 300){  
			$("#header").addClass("active");
			$("#gnb").addClass("active");
		}
		else{
			$("#header").removeClass("active");
			$("#gnb").removeClass("active");
		}

		if(w > 970) return;

		clearTimeout(scrollTimer);

		scrollTimer=setTimeout(function(){
			if(scrollT < $("#page1").offset().top-winHalf){
				n=0;
			}
			else if(scrollT < $("#page2").offset().top-winHalf){
				n=1;
			}
			else if(scrollT < $("#page3").offset().top-winHalf){
				n=2;
			}
			else if(scrollT < $("#page4").offset().top-winHalf){
				n=3;
			}
			else if(scrollT < $("#page5").offset().top-winHalf){
				n=4;
			}
			else{
				n=5;
			}
			

			$(".wrapper > *").removeClass("active");
			$(".wrapper > *").eq(n).addClass("active");

		}, 50);
	});

	$("#gnb li").click(function(e){
		if($("html").is(":animated")) return;

		e.preventDefault();
		n=$(this).index();
		pos=n*h;

		$("html").animate({scrollTop:pos}, 800, function(){
			$("#gnb li").children().removeClass("active");
			$("#gnb li").eq(n).children().addClass("active");
			$(".wrapper > *").removeClass("active");
			$(".wrapper > *").eq(n).addClass("active");
		});
	});
	$("#m_gnb li").click(function(e){
		$("#m_gnb").removeClass("active");
		$("#main .dim").removeClass("active");
		$("#main .btn").removeClass("active");

		if($("html").is(":animated")) return;

		e.preventDefault();
		n=$(this).index();
		pos=n*h;

		$("html").animate({scrollTop:pos}, 800, function(){
			$(".wrapper > *").removeClass("active");
			$(".wrapper > *").eq(n).addClass("active");
		});
	});

	//모바일탭메뉴
	$(".tab").click(function(e){
		e.preventDefault();
		$("#m_gnb").addClass("active");
		$("#main .dim").addClass("active");
		$("#main .btn").addClass("active");
	});
	$("#main .btn").click(function(){
		$("#m_gnb").removeClass("active");
		$(".dim").removeClass("active");
		$(this).removeClass("active");

		if($(".sub").hasClass("active")){
			$(".sub").removeClass("active"); 
		}
	});

	//메인 비디오 슬라이더
	var videoUrl=["movie1", "movie2", "movie3"];
	var videoTotal=videoUrl.length-1;//비디오갯수는3개고 인덱스는0.1.2
	var videoN=0;
	var videoPath=""; //'video/' + videoUrl[videoN]+".mp4"
	var video=document.getElementById("my_video");
	video.muted=true;

	function videoInterface(){
		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4";
		$(".media video").attr({src:videoPath});
		$(".media video").hide();
		var playPromise = video.play();
		if (playPromise !== undefined) { playPromise.then((_) => {}).catch((error) => {}); }

		setTimeout(function(){
			$(".media video").fadeIn(300);
		}, 500);
	}
	function controllerInterface(){
		$(".main_slider .controller").removeClass("active");

		setTimeout(function(){
			$(".main_slider .controller .num").html("<span>"+(videoN+1)+"</span> / "+videoUrl.length);
			$(".main_slider .controller").addClass("active");
		}, 80);
	}

	videoInterface();
	controllerInterface();

	video.addEventListener("ended", function(){
		if(videoN < videoTotal){
			videoN++;
		}
		else{
			videoN=0;
		}

		videoInterface();
		controllerInterface();
	});
	$(".controller .prev").click(function(e){
		e.preventDefault();

		if(videoN > 0){
			videoN--;
		}
		else{
			videoN=videoTotal;
		}

		videoInterface();
		controllerInterface();
	});
	$(".controller .next").click(function(e){
		e.preventDefault();

		if(videoN < videoTotal){
			videoN++;
		}
		else{
			videoN=0;
		}

		videoInterface();
		controllerInterface();
	});

	//page2 롤링 슬라이더
	rolling();

	function rolling() {
		let LeftTarget = $('.rolling_target:eq(0)>li');
		let RightTarget = $('.rolling_target:eq(1)>li');

		let LeftCount = LeftTarget.length;
		let RightCount = RightTarget.length;

		let LeftClone = $(LeftTarget).clone();
		let RightClone = $(RightTarget).clone();

		$(LeftTarget).parent().append(LeftClone);
		$(RightTarget).parent().append(RightClone);
	}

	rolling_bottom();

	function rolling_bottom() {
		let TopTarget = $('.rolling_target:eq(0)>li');
		let BottomTarget = $('.rolling_target:eq(1)>li');

		let TopCount = TopTarget.length;
		let BottomCount = BottomTarget.length;

		let TopClone = $(TopTarget).clone();
		let BottomClone = $(BottomTarget).clone();

		$(TopTarget).parent().append(TopClone);
		$(BottomTarget).parent().append(BottomClone);
	}
});