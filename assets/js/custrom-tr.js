$(document).ready(function(){
  new WOW().init();
  $('.slider_element').slick({
    dots: true,
    slidesToShow: 1,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/57.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/56.png' alt=''></button>",
    responsive: [{
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, ]
  });
  $('.slider_feel').slick({
    dots: true,
    slidesToShow: 3,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/57.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/56.png' alt=''></button>",
    responsive: [{
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, ]
  });
  $('.slider_gv').slick({
    dots: false,
    slidesToShow: 3,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/57.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/56.png' alt=''></button>",
    responsive: [{
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, ]
  });
  $('.slider_pf').slick({
    dots: false,
    slidesToShow: 1,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/58.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/59.png' alt=''></button>",
    responsive: [{
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, ]
  });
  /* back to top */
  var scrollInterval = setInterval(function() { 
    document.body.scrollTop = document.body.scrollHeight;
  }, 50);
  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.backtotop').fadeIn();
    } else {
      $('.backtotop').fadeOut();
    }
  });
  $('.backtotop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  /* back to top */
  $('.play_video_pf').click(function(){
    $('.preview_video_pf').show();
  });
  $('.close_btn').click(function(){
    $('.preview_video_pf').hide();
  });
 
});