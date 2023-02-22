
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
        stagePadding: 70,
        margin: 0,
        center: true,
      },
      320:{
        items: 1,
        center:true,
        margin:0,
        stagePadding:50
      },
      425:{
        items: 1,
        center:true,
        margin:0,
        stagePadding:50
      },
      500:{
        items:1,
        stagePadding:90,
        margin:20,
        center:true
      },
      602:{
        items:1,
        stagePadding:110,
        margin:20,
        center:true
      },
      696: {
        items: 2,
      },

      991: {
        items: 2,
      },
      1030: {
        items: 3,
      },
    }
  });



  var marketOwl = $("#marketOwlCarousel");
  marketOwl.owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    nav: true
  });


  var newsOwl = $("#corporateNewsWrapper");
  newsOwl.owlCarousel({
      items: 2,
      margin: 30,
      loop: true,
      nav: true,
  });

  var newsOwlResponsive = $("#newsOwlCarouselRsponsive");
  newsOwlResponsive.owlCarousel({
      items: 1,
      margin: 30,
      loop: true,
      nav: true,
      
  });



  var galleryOwl = $("#gallery");
  galleryOwl.owlCarousel({
    items: 5,
    margin: 10,
    loop: true,
    nav: true,
    center: true,

    responsive: {
      0: {
        items: 1
      },
      320:{
        items: 1,
        stagePadding: 60,
      },
      375:{
        items: 1,
        stagePadding: 80,
      },
      425:{
        items: 1,
        stagePadding: 100,
      },
      530:{
        items: 1,
        stagePadding: 120,
      },
      768: {
        items: 1,
        stagePadding: 150,
      },
      769:{
        items: 4,
      },
      1170: {
        items: 5
      }
    }
  });



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
      320:{
        items: 1,
        stagePadding: 40,
      },
      375:{
        items: 1,
        stagePadding: 60,
      },
      425:{
        items: 1,
        stagePadding: 70,
      },
      530:{
        items: 1,
        stagePadding: 100,
      },
      768: {
        items: 1,
        stagePadding: 130,
      },

      1024: {
        items: 1,
        stagePadding: 200,
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