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
    // 按鈕收放效果
    $(".img_c1").click(function () {
        $(".news2").hide("slow");
    });
    $(".img_c1").click(function () {
        $(".news1").hide("slow");
    });
    $(".img_c1").click(function () {
        $(".news1").show("slow");
    });
    $(".img_c2").click(function () {
        $(".news1").hide("slow");
    });
    $(".img_c2").click(function () {
        $(".news2").show("slow");
    });
});