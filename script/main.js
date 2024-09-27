$(function(){







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