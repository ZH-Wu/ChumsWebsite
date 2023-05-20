$(function () {
  $('.aboutus').click(() => {
    $('.aboutus').toggleClass('active');
    $('.aboutus-item').slideToggle();
  });
  $('.product').click(() => {
    $('.product').toggleClass('active');
    $('.product-item').slideToggle();
  });
  $('.news').click(() => {
    $('.news').toggleClass('active');
    $('.news-item').slideToggle();
  });
  $('.store').click(() => {
    $('.store').toggleClass('active');
    $('.store-item').slideToggle();
  });
});