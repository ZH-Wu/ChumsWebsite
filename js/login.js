$(function () {
  // header下拉式選單 
  $('.dropdown').click(function () {
    $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active').siblings().slideUp();
    $(this).siblings().slideToggle();
  });

  // offcanvas_RWD滑動式選單
  $('.menuL, .back').click(function () {
    $('.menuL, .back, .slide-menuM').toggleClass('active');
  });

  // 滑動至指定區塊
  $('.dropdown-item a').click(function () {
    let btn = $(this).attr('href');
    let pos = $(btn).offset();
    $('html, body').animate({ scrollTop: pos.top }, 1500);
  });
});