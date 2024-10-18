$(function () {

  // header_scrollfix
  let win = $(window);
  let header = $('header');
  let section1 = $('#section1')
  let spot = section1.offset().top;

  win.scroll(function () {

    if (win.scrollTop() > spot) {
      header.addClass('fix')
    } else {
      header.removeClass('fix')

    }

  });


  // mo_side_menu
  $('.menu').click(function () {
    $('#side_menu').slideToggle();

    $('.top').toggleClass('open');
    $('.mid').toggleClass('open');
    $('.btm').toggleClass('open');


    $('body').toggleClass('hidden')

  });



  //main
  let currentIndex = 0;
  $('.slide_wrap').append($('.slide').first().clone(true));

  setInterval(function () {
    currentIndex++;

    //슬라이드가 하나씩 이동
    $('.slide_wrap').stop(true).animate({ marginLeft: -currentIndex * 100 + "%" }, 600)

    //슬라이드 처음으로 보내기
    if (currentIndex == 3) {
      setTimeout(function () {
        $('.slide_wrap').stop(true).animate({ marginLeft: '0' }, 0)


        currentIndex = 0;
      }, 700);
    }


  }, 3000);




  // section2
  var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      860: {
        slidesPerView: 3,
        spaceBetween: 12
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });




});