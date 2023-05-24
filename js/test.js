$(function () {
  $('.magnifier').click(() => {
    event.preventDefault();
    $('.item').stop().toggle();
  });
  $('.button').click(() => {
    $('.item2').addClass('active');
  }); 
    $('.item2').click(() => {
      $('.item2').removeClass('active');
  });
});