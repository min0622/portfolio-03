$(function(){
    // 메뉴바
    $("header nav>span,ul,li").on({
        mouseover:function(){
            $("ul").stop(true).fadeIn();
        },
        mouseout:function(){
            $("ul").stop(true).fadeOut();
        },
    });

    // 스크롤 내리면 header 사라짐. 스크롤 위로하면 나타나게?

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
        
        if(top>=4100){
            $(".noti1 .notiBox").stop(true).fadeIn(100);
            $(".noti2 .notiBox").stop(true).fadeIn(500);
            $(".noti3 .notiBox").stop(true).fadeIn(900);
        }else{
            $(".noti1 .notiBox").stop(true).fadeOut();
            $(".noti2 .notiBox").stop(true).fadeOut();
            $(".noti3 .notiBox").stop(true).fadeOut();
        }
    });


    // slick...
    
// $("#slide").slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });
    

    // 스크롤 내렸을때 new에서 아래->위 나타남
    AOS.init();


// 지도
 $("#mapbox .map .bg").click(function(){
  $(".bg").toggleClass("add")

  let b =$(".bg")
  if(b.hasClass("add")){
    $(".t5").stop(true).fadeIn();
    // $(".t5").stop(true).animate({display:"block"},1000,"linear");
    
  }
 });

    




});