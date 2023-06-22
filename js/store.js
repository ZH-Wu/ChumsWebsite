$(document).ready(function () {
  // header下拉式選單
  $('.dropdown').click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active').siblings().slideUp();
    $(this).siblings().slideToggle();
  });
  $('header, main').click(function () {
    $('.dropdown-item').slideUp();
  });

  // offcanvas_RWD滑動式選單
  $('.menuL, .back').click(function () {
    $('.menuL, .back, .slide-menuM').toggleClass('active');
  });

  // fadein out
  // $("#n").click(function () {
  //   $(".list_item_m,.list_item_s").fadeOut();
  //   $(".list_item_n").fadeIn("slow");
  // });
  // $("#m").click(function () {
  //   $(".list_item_n,.list_item_s").fadeOut();
  //   $(".list_item_m").fadeIn("slow");
  // });
  // $("#s").click(function () {
  //   $(".list_item_n,.list_item_m").fadeOut();
  //   $(".list_item_s").fadeIn("slow");
  // });

  $("#n").click(function () {
    $(".list_item_m,.list_item_s").fadeOut("fast");
    $(".list_item_n").fadeToggle("1000");
  });
  $("#m").click(function () {
    $(".list_item_n,.list_item_s").fadeOut("fast");
    $(".list_item_m").fadeToggle("1000");
  });
  $("#s").click(function () {
    $(".list_item_n,.list_item_m").fadeOut("fast");
    $(".list_item_s").fadeToggle("1000");
  });
});
