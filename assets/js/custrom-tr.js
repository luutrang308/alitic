$(document).ready(function(){
  new WOW().init();
  $('.slider_element').slick({
    dots: true,
    slidesToShow: 1,
  });
  $('.slider_feel').slick({
    dots: true,
    slidesToShow: 3,
  });
  $('.slider_gv').slick({
    dots: true,
    slidesToShow: 3,
    responsive:[
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    ]
  });
  
 
});