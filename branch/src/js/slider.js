$(function(){
  $('.m-pg-slider img:gt(0)').hide();
  setInterval(function(){
    $('.m-pg-slider :first-child').fadeOut()
       .next('img').fadeIn()
       .end().appendTo('.m-pg-slider');}, 
    4000);
});