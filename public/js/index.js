$(document).ready(function(){

  $('.burger').click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $('.home-news-slider').slick({
    infinite: true,
    slidesToShow: 1,
    variableWidth: true,
    prevArrow: $('#left'),
    nextArrow: $('#right'),
    draggable: true,
    // responsive: [
    // {
    //   breakpoint: 768,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   }
    // }
    // ]
  });
});