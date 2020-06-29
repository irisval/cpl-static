$(document).ready(function(){
  $('.home-news-slider').slick({
      infinite: true,
      slidesToShow: 1,
      variableWidth: true,
      prevArrow: $('#left'),
      nextArrow: $('#right'),
      draggable: true
  });

});
  