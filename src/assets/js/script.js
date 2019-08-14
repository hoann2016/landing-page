"use strict";
$(document).ready(function() {


  /*----------------------------------------
   home removeclass section
  ----------------------------------------*/
  var slider_caption = $(window).width();
  if (slider_caption >= 2000) {
    $('.home-right').addClass("home-contain");
  }
  if (slider_caption <= 1024) {
    $('.home-right').addClass("home-contain");
  }


  /*----------------------------------------
   mobile menu nav click hide collapse
   ----------------------------------------*/
  var mobile_menu = $(window).width();
  if (mobile_menu < 991) {
    $("nav a.nav-link").on('click', function(event) {
      if (!$(this).hasClass('dropdown-toggle')) {
        $(".navbar-collapse").collapse('hide');
      }

    });
  }

  /*----------------------------------------
     GO to Home
    ----------------------------------------*/
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 500) {
      $('.tap-top').fadeIn();
    } else {
      $('.tap-top').fadeOut();
    }
  });
  $('.tap-top').on('click', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

});
