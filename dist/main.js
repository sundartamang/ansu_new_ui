
$(function () {
  // Owl Carousel
  var recompanySearchOwl = $("#researchOpinion");
  recompanySearchOwl.owlCarousel({
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
      320: {
        items: 1,
        center: true,
        margin: 0,
        stagePadding: 50
      },
      425: {
        items: 1,
        center: true,
        margin: 0,
        stagePadding: 50
      },
      500: {
        items: 1,
        stagePadding: 90,
        margin: 20,
        center: true
      },
      602: {
        items: 1,
        stagePadding: 110,
        margin: 20,
        center: true
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
    responsive: {
      0: {
        items: 1,
        stagePadding: 50,
        margin: 0,
        center: true,
      },

      490: {
        items: 1,
        stagePadding: 70,
        margin: 0,
        center: true,
      },

      696: {
        items: 2,
        margin: 30,
      }
    }
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
      320: {
        items: 1,
        stagePadding: 60,
      },
      375: {
        items: 1,
        stagePadding: 80,
      },
      425: {
        items: 1,
        stagePadding: 100,
      },
      530: {
        items: 1,
        stagePadding: 120,
      },
      768: {
        items: 1,
        stagePadding: 150,
      },
      769: {
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
      320: {
        items: 1,
        stagePadding: 40,
      },
      375: {
        items: 1,
        stagePadding: 60,
      },
      425: {
        items: 1,
        stagePadding: 70,
      },
      530: {
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



// navbar repsonsive
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

// hide display company page companySearch input field
let companySearch = document.querySelector('#companySearchIcon');
document.getElementById('companySearchIcon').onclick = () => {
  document.getElementById('companySearch').classList.add("visible");
  document.getElementById('companyClear').classList.add("visible");
  document.getElementById('search_icon_wraper').classList.add("changePosition");
  document.getElementById('companySearch').focus();
  document.getElementById('companySearchIcon').classList.add("hide");
}
document.getElementById('companyClear').onclick = () => {
  document.getElementById('companySearchIcon').classList.remove("hide");
  document.getElementById('companySearch').classList.remove("visible");
  document.getElementById('search_icon_wraper').classList.remove("changePosition");
  document.getElementById('companyClear').classList.remove("visible");
}

/*
hide and show dorpdown profile menu js start
*/
function showDowpDown() {
  document.getElementById("headerNavDropDown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.profile_dropdown_icon')) {

    var dropdowns = document.getElementsByClassName("header__nav_dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      console.warn("Click somehere on widnows")
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*
hide and show dorpdown profile menu js end
*/


// expand and collpase table row
// document.getElementById('expandTableRow').onclick = () => {
//   console.log("I am clicked... expandTableRow")

//   var w = $("#collpaseTableRow");

//   if(w.hasClass('visible')) {
//     w.removeClass('visible');
//   } else {
//     w.addClass('visible');
//   }


//   // document.getElementById('collpaseTableRow').classList.add("visible");
// }