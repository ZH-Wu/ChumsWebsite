$(function () {
  $('.dropdown').click(function () {
    $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active').siblings().slideUp();
    $(this).siblings().slideToggle();
  });

  // 簡化前的程式碼
  // $('.dropdown').click(function() {
  //   $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active');
  //   $(this).siblings().slideToggle();
  //   $(this).parent().siblings().find('.dropdown-item').slideUp();
  // });
});