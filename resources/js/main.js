$(document).ready(function () {
  // STICKY MENU
  $(".js-feature").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    }, {
      offset: "60px;"
    }
  );

  // SCROLL ON BUTTONS (I AM HUNGRY)
  $(".js-scroll-to-plan").click(function () {
    $("html, body").animate({
        scrollTop: $(".js-plans").offset().top
      },
      1000
    );
  });


  // SCROLL ON BUTTONS (I AM HUNGRY)
  $(".js-scroll-to-feature").click(function () {
    $("html, body").animate({
        scrollTop: $(".js-feature").offset().top
      },
      1000
    );
  });



  //active link
  $("nav ul li a").click(function () {
    $("nav ul li a").removeClass("active"), $(this).addClass("active")
  }), $("nav a img.logo").click(function () {
    $("nav ul li a").removeClass("active"), $("nav ul li:first-child a").addClass("active")
  });


  // smooth scroll for ie/ edge/ safari
  $("a").on("click", function (a) {
    if ("" !== this.hash) {
      a.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });


  // Mobile navigation
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('fa-bars')) {
      icon.addClass('fa-times');
      icon.removeClass('fa-bars');
    } else {
      icon.addClass('fa-bars');
      icon.removeClass('fa-times');
    }
  });


  // // ANIMATED ON SCROLL
  // $(".js--wp-1").waypoint(function {
  //   $(".js--wp-1").addClass("animated fadeIn");
  // }, {
  //   offset: "50%"
  // });



});