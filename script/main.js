$(function(){

  // header_scrollfix
  let win = $(window);
  let header = $('header');
  let section1 = $('#section1')
  let spot = section1.offset().top;

 win.scroll(function(){
    
  if(win.scrollTop()>spot){
    header.addClass('fix')
  } else{
    header.removeClass('fix')

  }

  });


// mo_side_menu
$('.menu').click(function(){
  $('.inner_side').slideToggle();
  // $('.inner_side').toggleClass('down');

  $('.top').toggleClass('open');
  $('.mid').toggleClass('open');
  $('.btm').toggleClass('open');
  // $(".mid").css({opacity:'0'});
  // $('.top').css({transform:'translateY(11px) rotate(45deg)'})
  // $('.btm').css({transform:'translateY(-11px) rotate(-45deg)'})

});






  // section2
    var swiper = new Swiper(".mySwiper", {
       
        slidesPerView: 1,
        // loop: true,
      spaceBetween: 10,
    //   centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 50
              },
           1024: {
              slidesPerView: 3,  
              spaceBetween: 40,
            },
            1400: {
              slidesPerView:4, 
              spaceBetween: 24,
            },
          },
      });




});