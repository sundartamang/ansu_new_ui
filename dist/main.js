
$(function () {
  // Owl Carousel
  var researchOwl = $("#researchOpinion");
  researchOwl.owlCarousel({
    items: 3,
    margin: 30,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      696: {
        items: 2,
        nav: true
      },

      991: {
        items: 2,
        nav: true
      },
      1030: {
        items: 3,
        nav: true
      },
    }
  });

  var corporateNewsOwl = $("#corporatenewsOwlCarousel");
  corporateNewsOwl.owlCarousel({
      items: 2,
      loop: true,
      nav: true,
  });



  var marketOwl = $("#marketOwlCarousel");
  marketOwl.owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: true
  });





  var newsOwlResponsive = $("#newsOwlCarouselRsponsive");
  newsOwlResponsive.owlCarousel({
    items: 1,
    margin: 30,
    loop: true,
    nav: true
  });

  var galleryOwl = $("#gallery");
  galleryOwl.owlCarousel({
    items: 5,
    margin: 10,
    loop: true,
    nav: true
  });



  "use strict";

  var testimonialOwl = $("#testimonialCarousel");
  testimonialOwl.owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 10,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });

});


// let menu = document.querySelector('#menu-icon');
// let hidden_nav = document.querySelector('.header__responsive_menu_more');

// menu.onclick = () =>{
//   console.log("I am clicked")
//   menu.classList.toggle('bx-x');
//   hidden_nav.classList.toggle('open')

// }


let menu = document.querySelector('#menu-icon');
let hidden_nav = document.querySelector('.header__responsive_menu_more');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  hidden_nav.classList.toggle('active')

}