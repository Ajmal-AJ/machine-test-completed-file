const swiper = new Swiper('.bannerswiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
      el: '.swiper-pagination',
      
    },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    nav:false,
    smartSpeed:1000,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
           
        },
        600:{
            items:2,
            
        },
        1000:{
            items:5,
            
           
        }
    }
})

//animation aos
function aos_init() {
  AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
  });
}
window.addEventListener('load', () => {
  aos_init();
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
 
  if (scroll > 700 ) {
    $(".top-nav-box").hide()
    $(".top-nav-box").removeClass("d-lg-block")
    
    

  }else {
      $(".top-nav-box").show()
      $(".top-nav-box").addClass("d-lg-block")
      
  }
});