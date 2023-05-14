// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();

//     if (scroll >= 500) {
//         $('.header-desktop').addClass("active")
//         $(".vertical-menu-container").css("display", "none");
//         console.log('true') 
//     } else {
//         $('.header-desktop').removeClass("active")
//         $(".vertical-menu-container").css("display", "block");
//     };
// });



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