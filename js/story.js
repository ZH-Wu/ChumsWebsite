$(function () {
  // header下拉式選單 
  $('.dropdown').click(function() {
    $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active').siblings().slideUp();
    $(this).siblings().slideToggle();
  });

  // offcanvas_RWD滑動式選單
  $('.menuL, .back').click(function() {
    $('.menuL, .back, .slide-menuM').toggleClass('active');
  });
});