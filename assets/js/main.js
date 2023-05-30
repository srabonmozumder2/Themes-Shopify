    /*====================================================================================================
                       MAIN.JS CODE START
====================================================================================================*/
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        $('.header-desktop').addClass("active")
        $(".vertical-menu-container").removeClass('show')
        console.log('true') 
    } else {
        $('.header-desktop').removeClass("active")
        $(".vertical-menu-container").addClass('show');
    };
});

$(".vertical-menu__button.btn.btn-primary").click(function(){
    $(".vertical-menu-container").toggleClass("show");
  });   


  /* ==========/////////=============
  PRELODAR START
============//////////============== */

  /* ==========/////////=============
  PRELODAR END
============//////////============== */
$(document).ready(function(){
    $("button.icon i").click(function(){
      $(".mobile-responsive").addClass("show");
    });

    $(".close-bar a").click(function(){
        $(".mobile-responsive").removeClass("show");
      });
  });

  $('.hero-slider').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout: 2000, 
    responsiveClass:true,
    // autoplayHoverPause:true,
    navSpeed:true,
    animateOut: 'fadeOut',
    navText: ["<div class='nav-bar'><i class='fa fa-arrow-left'></i></div>" , "<div class='nav-bar'><i class='fa fa-arrow-right'></i></div>"],
    responsive:{
        0:{
            items:1,
            nav:true,
        },
        600:{
            items:1,
            nav:true,
        },
        1000:{
            items:1,
            nav:true,
        }
    }
  });


  
$(document).ready(function () {
      var $bigItem = $('.image-big-list-item');
      var $smallItem = $('.image-small-list-item');
      $smallItem.on('click mouseenter', function () {
          $bigItem.removeClass('active');
          $smallItem.removeClass('active');
          $bigItem.eq($(this).index()).addClass('active');
          $smallItem.eq($(this).index()).addClass('active');
      });
   });
  

   $(document).ready(function () {
      var $bigItem = $('.image-big-list-item-two');
      var $smallItem = $('.image-small-list-item-two');
      $smallItem.on('click mouseenter', function () {
          $bigItem.removeClass('active');
          $smallItem.removeClass('active');
          $bigItem.eq($(this).index()).addClass('active');
          $smallItem.eq($(this).index()).addClass('active');
      });
   });


   /* /////////////BALL FOR DOG THREE START////////// */
   $(document).ready(function () {
    var $bigItem = $('.image-big-list-item-three');
    var $smallItem = $('.image-small-list-item-three');
    $smallItem.on('click mouseenter', function () {
        $bigItem.removeClass('active');
        $smallItem.removeClass('active');
        $bigItem.eq($(this).index()).addClass('active');
        $smallItem.eq($(this).index()).addClass('active');
    });
 });
 /* /////////////BALL FOR DOG THREE END////////// */

/* <!-- /////////////DOG COLOR BEALT FOUR START////////// --> */

 $(document).ready(function () {
    var $bigItem = $('.image-big-list-item-four');
    var $smallItem = $('.image-small-list-item-four');
    $smallItem.on('click mouseenter', function () {
        $bigItem.removeClass('active');
        $smallItem.removeClass('active');
        $bigItem.eq($(this).index()).addClass('active');
        $smallItem.eq($(this).index()).addClass('active');
    });
 });
/* <!-- /////////////DOG COLOR BEALT FOUR END////////// --> */

/* <!-- /////////////ORTHOPEDIC FIVE START////////// --> */
$(document).ready(function () {
    var $bigItem = $('.image-big-list-item-five');
    var $smallItem = $('.image-small-list-item-five');
    $smallItem.on('click mouseenter', function () {
        $bigItem.removeClass('active');
        $smallItem.removeClass('active');
        $bigItem.eq($(this).index()).addClass('active');
        $smallItem.eq($(this).index()).addClass('active');
    });
 });
 
/* <!-- /////////////ORTHOPEDIC FIVE END////////// --> */


(function () {
    "use strict";
    var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
      return function (arg) {
        if (this.length > 1) {
          this.each(function () {
            var $this = $(this);
  
            if (!$this.data(ident)) {
              $this.data(ident, func($this, arg));
            }
          });
  
          return this;
        } else if (this.length === 1) {
          if (!this.data(ident)) {
            this.data(ident, func(this, arg));
          }
  
          return this.data(ident);
        }
      };
    });
  })();
  
  (function () {
    "use strict";
    function Guantity($root) {
      const element = $root;
      const quantity = $root.first("data-quantity");
      const quantity_target = $root.find("[data-quantity-target]");
      const quantity_minus = $root.find("[data-quantity-minus]");
      const quantity_plus = $root.find("[data-quantity-plus]");
      var quantity_ = quantity_target.val();
      $(quantity_minus).click(function () {
        quantity_target.val(--quantity_);
      });
      $(quantity_plus).click(function () {
        quantity_target.val(++quantity_);
      });
    }
    $.fn.Guantity = jQueryPlugin("Guantity", Guantity);
    $("[data-quantity]").Guantity();
  })();
  

    /*====================================================================================================
                       MAIN.JS CODE END
====================================================================================================*/


/*====================================================================================================
                       ABOUT US.JS CODE END
====================================================================================================*/    
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        $('.header-desktop').addClass("active")
        $(".vertical-menu-about-us-page").removeClass('hide')
    } else {
        $('.header-desktop').removeClass("active")
    };
});
  $(document).ready(function(){
    $(".vertical-menu__button.btn.btn-primary.vertical-wrepper-button").click(function(){
      $(".vertical-menu-container.vertical-menu-about-us-page").toggleClass("add");
    });
  });


/*====================================================================================================
                       ABOUT US.JS CODE END
====================================================================================================*/

/* ==========/////////=============
        PRELODAR START
============//////////============== */

$(window).on('load', function() {
    $('.prelodar').delay(350).fadeOut('slow');
})


  $(".user-header-dropdown-icon").click(function(){
    $(".dropdown-menu-area").toggleClass("active");
  });   


  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }


  $(".world-selacet-menu").click(function(){
    $(".dropdown-content").toggleClass("footer-active");
  });   
/* ==========/////////=============
           PRELODAR END
============//////////============== */