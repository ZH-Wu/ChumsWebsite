$(function () {
    // header下拉式選單
    $('.dropdown').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active').siblings().slideUp();
        $(this).siblings().slideToggle();
    });
    $('header, main').click(() => {
        $('.dropdown-item').slideUp();
    })

    // offcanvas_RWD滑動式選單
    $('.menuL, .back').click(function () {
        $('.menuL, .back, .slide-menuM').toggleClass('active');
    });

});
// 開合按鈕
var btns = document.getElementsByTagName("button");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var isActive = this.style.backgroundColor === "rgb(253, 212, 121)";
        for (var j = 0; j < btns.length; j++) {
            btns[j].style.backgroundColor = "";
            btns[j].style.color = "";
        }
        if (!isActive) {
            this.style.backgroundColor = "#FDD479";
            this.style.color = "#4c4c4c";
        }
    });
}
