$(function(){
    // 삼선 클릭시 메뉴바 나타나게-슬라이드다운 / 삼선 -> x로 바뀌게
    $("header .ham").click(function(){

      let all = $("#top, #mid, #btm, nav, header h1")

      all.toggleClass("open")

      if(all.hasClass("open")){
      $("#top").css({transform:'translateY(8px) rotate(45deg)', backgroundColor:'#000'}),
      $("#mid").css({opacity:"0"});
      $("#btm").css({transform:'translateY(-8px) rotate(-45deg)',backgroundColor:'#000'})

      $("nav").stop(true).slideDown();

    } else{
      $("#top").css({transform:'translateY(0)', backgroundColor:'#fff'}),
      $("#mid").css({opacity:"1"});
      $("#btm").css({transform:'translateY(0)',backgroundColor:'#fff'})

      $("nav").stop(true).slideUp();
    
    }

    });
  


    // 스크롤 내리면 header 사라짐. 스크롤 위로하면 나타나게..??
    $(window).scroll(function(){

      let spot = $(window).scrollTop();
      console.log(spot)

      if(spot>=800){
        $("header").stop(true).fadeOut();
      } else{
        $("header").stop(true).fadeIn();
        
      }

    });

    // top버튼
    $(window).scroll(function(){
        let top = $(window).scrollTop();
        console.log(top)

        if(top>=100){
            $(".top").stop(true).fadeIn();
        }else{
            $(".top").stop(true).fadeOut();
        }

        $(".top").click(function(){
            $(window).scrollTop(0);
        });


        // 스크롤 내렸을때 notice 시간차 두고 하나씩 fadein
        
        // if(top>=3400){
        //     $(".noti1 .notiBox").stop(true).fadeIn(100);
        //     $(".noti2 .notiBox").stop(true).fadeIn(500);
        //     $(".noti3 .notiBox").stop(true).fadeIn(900);
        // }else{
        //     $(".noti1 .notiBox").stop(true).fadeOut();
        //     $(".noti2 .notiBox").stop(true).fadeOut();
        //     $(".noti3 .notiBox").stop(true).fadeOut();
        // }
      
    });


    // slick...
    
$("#slide").slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    dots:true,
    responsive: [
      {
        breakpoint:991,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '8px',
          slidesToShow: 3,
          dots:true
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '3px',
          slidesToShow: 2,
          dots:true
        }
      }
      ,
      {
        // 모바일에서 슬릭깨기!!
        breakpoint: 575,
        settings:'unslick'
      }
    ]
  });


    

    // 스크롤 내렸을때 new에서 아래->위 나타남
    AOS.init();


// 지도
 $(".bg").click(function(){
  $(".bg").toggleClass("add")

  if($(this).hasClass("add")){  // this = .bg
    $(".t5").stop(true).fadeIn();

    // $(".bg2, .bg3").css({fill:'#3a2711', transform:'translate(-140%,0) scale(2)', transitionDuration:"2s"})
    // $(".bg3").css({stroke:"#7a634a"});
  

  }else{
    $(".t5").stop(true).fadeOut();

    // $(".bg2, .bg3").css({fill:' #7E6648', transform:'translate(0) scale(1)', transitionDuration:"2s"})
    // $(".bg3").css({stroke:" #F0DFC8"});
  }
});


$(".dsg").click(function(){
  $(".dsg").toggleClass("add")
  
  if( $(this).hasClass("add")){ //this = .dsg
    $(".t7").stop(true).fadeIn();
  }else{
    $(".t7").stop(true).fadeOut();

  }
});

$(".dsn").click(function(){
  $(".dsn").toggleClass("add")
  
  if( $(".dsn").hasClass("add")){
    $(".t8").stop(true).fadeIn();
  }else{
    $(".t8").stop(true).fadeOut();

  }
});

$(".ssg").click(function(){
  $(".ssg").toggleClass("add")
  
  if( $(".ssg").hasClass("add")){
    $(".t3").stop(true).fadeIn();
  }else{
    $(".t3").stop(true).fadeOut();

  }
});

$(".sg").click(function(){
  $(".sg").toggleClass("add")
  
  if( $(".sg").hasClass("add")){
    $(".t6").stop(true).fadeIn();
  }else{
    $(".t6").stop(true).fadeOut();

  }
});

$(".dg").click(function(){
  $(".dg").toggleClass("add")
  
  if( $(".dg").hasClass("add")){
    $(".t1").stop(true).fadeIn();
  }else{
    $(".t1").stop(true).fadeOut();

  }
});

$(".jg").click(function(){
  $(".jg").toggleClass("add")
  
  if( $(".jg").hasClass("add")){
    $(".t2").stop(true).fadeIn();
  }else{
    $(".t2").stop(true).fadeOut();

  }
});

$(".ng").click(function(){
  $(".ng").toggleClass("add")
  
  if( $(".ng").hasClass("add")){
    $(".t4").stop(true).fadeIn();
  }else{
    $(".t4").stop(true).fadeOut();

  }
});




 
    




});