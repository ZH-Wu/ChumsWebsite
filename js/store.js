$(document).ready(function () {
  $("#n,#n .img_c").click(function () {
    $(".list_item_m,.list_item_s").hide("slow");
  });
  $("#n").click(function () {
    $(".list_item_n").show("slow");
  });
  $("#m,#m .img_c").click(function () {
    $(".list_item_n,.list_item_s").hide("slow");
  });
  $("#m").click(function () {
    $(".list_item_m").show("slow");
  });
  $("#s,#s .img_c").click(function () {
    $(".list_item_n,.list_item_m").hide("slow");
  });
  $("#s").click(function () {
    $(".list_item_s").show("slow");
  });
});
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

  // 簡化前的程式碼
  // $('.dropdown').click(function() {
  //   $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active');
  //   $(this).siblings().slideToggle();
  //   $(this).parent().siblings().find('.dropdown-item').slideUp();
  // });
});