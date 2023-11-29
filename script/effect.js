$(function(){
    // 삼선 클릭시 메뉴바 나타나게-슬라이드다운 / 삼선 -> x로 바뀌게
    $("header .ham").click(function(){
      $("#top").css({transform:'translateY(14px)', transform:" rotate(45deg)",    backgroundColor:'#000'}),
  
      $("#mid").css({opacity:"0"});
      $("#btm").css({transform:'translateY(-14px)', transform:" rotate(-45deg)"})
      $("nav").stop(true).delay(500).slideDown();
    });
    $(".close").click(function(){
      $("nav").stop(true).slideUp();
    });


    // 스크롤 내리면 header 사라짐. 스크롤 위로하면 나타나게..??
    $(window).scroll(function(){

      let spot = $(window).scrollTop();
      console.log(spot)

      if(spot>=500){
        $("header").css({display:'none'});
      } else{
        $("header").css({display:'block'});
        
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
        
        // if(top>=4100){
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
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '5px',
          slidesToShow: 2,
          dots:true
        }
      }
      ,
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
          dots:true
        }
      }
    ]
  });
    

    // 스크롤 내렸을때 new에서 아래->위 나타남
    AOS.init();


// 지도
 $(".bg").click(function(){
  $(".bg").toggleClass("add")

  if($(".bg").hasClass("add")){
    $(".t5").stop(true).fadeIn();
    // $(".t5").stop(true).animate({display:"block"},1000,"linear");
  }else{
    $(".t5").stop(true).fadeOut();
  }
});

$(".dsg").click(function(){
  $(".dsg").toggleClass("add")
  
  if( $(".dsg").hasClass("add")){
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