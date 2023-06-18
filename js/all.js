$(function () {
  // /* OffCanvas 主選單 */
  $('.nav figure').click(function () {
    $('.slide-menu').animate({ right: '0%' }, 800);
  });
  $('.slide-menu span').click(function () {
    $('.slide-menu').animate({ right: '-100%' }, 800);
  });

  //RWD OffCanvas主選單之ChatGpt優化程式碼
  const $navRwd = $('.nav_rwd');
  const $menuL = $navRwd.find('.menuL');
  const $back = $navRwd.find('.back');
  const $slideMenuM = $('.slide-menuM');

  $navRwd.on('click', '.menuL, .back', () => {
    $menuL.add($back).add($slideMenuM).toggleClass('active');
  });

  // RWD OffCanvas主選單原始程式碼
  // $('.nav_rwd .menuL, .nav_rwd .back').click(() => {
  //   $('.nav_rwd .menuL, .nav_rwd .back, .slide-menuM').toggleClass('active');
  // });

  // 指定卷軸到指定高度再執行淡入淡出效果
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if (innerWidth > 769) {
      $('.aboutUs').stop().toggleClass('animate__bounceInDown', scrollTop > 700);
      $('.logo_2, .welcomeBird').stop().toggleClass('animate__tada', scrollTop > 700);
      $('.c2').stop().toggle(scrollTop > 1300, 80);
      $('.c1').stop().toggle(scrollTop > 1800, 80);
      $('.c3').stop().toggle(scrollTop > 2200, 80);
      $('.c5').stop().toggle(scrollTop > 2400, 80).delay(100);
      $('.c4').stop().toggle(scrollTop > 2800, 80);
    } else if (innerWidth > 576 && innerWidth <= 768) {
      $('.aboutUs').stop().toggleClass('animate__bounceInDown', scrollTop > 300);
      $('.logo_2, .welcomeBird, .footprint').stop().toggleClass('animate__tada', scrollTop > 300);
      $('.c2').stop().toggle(scrollTop > 600, 80);
      $('.c1').stop().toggle(scrollTop > 800, 80).delay(200);
      $('.c3').stop().toggle(scrollTop > 1000, 80).delay(200);
      $('.c4').stop().toggle(scrollTop > 1200, 80).delay(200);
      $('.c5').stop().toggle(scrollTop > 1500, 80).delay(200);
    }
  });

  // 點擊放大鏡顯示及關閉商品
  $('.magnifier').click(function () {
    $(this).siblings('.product-box').toggle(500);
  });

  // 點擊立即購買出現下滑選單
  $('.buy').click(function () {
    $(this).siblings('.slideBox').toggleClass('active');
  });

  $('.return').click(function () {
    $(this).parent().toggleClass('active');
  });

  // goTop按鈕
  $('html,body').append('<div id="fixedTop"></div>');
  let fixedTop = $('#fixedTop');
  fixedTop.on('click', function () {
    $('html,body').animate({ scrollTop: '0' }, 500);
  });

  // 當視窗變數載入時(網頁開啟時、捲動、調整大小時)，執行...
  $(window).on('load scroll resize', function () {
    let showTop = 800;
    let curScrollTop = $(window).scrollTop();
    if (curScrollTop > showTop) {
      fixedTop.fadeIn(200);
    } else {
      fixedTop.fadeOut(200);
    }
  });
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  grabCursor: true,
  allowTouchMove: true,
  loop: true,
  // autoplay: {
  //   delay: 3000,
  //   pauseOnMouseEnter: true,
  //   disableOnInteraction: false,
  // },
  freeMode: {
    momentumBounce: true,
  },

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable :true,
  //   dynamicBullets: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});







// 簡化前的程式碼

// $(window).scroll(function () {
          //   if ($(this).scrollTop() > 800) {
          //     $('.aboutUs').stop().addClass('animate__slideInDown');
          //   } else {
          //     $('.aboutUs').stop().removeClass('animate__slideInDown');
          //   }
          //   if ($(this).scrollTop() > 800) {
          //     $('.logo_2, .birdOnThePath').stop().addClass('animate__tada');
          //   } else {
          //     $('.logo_2, .birdOnThePath').stop().removeClass('animate__tada');
          //   }
          //   if ($(this).scrollTop() > 1300) {
          //     $('.c2').stop().show(80);
          //   } else {
          //     $('.c2').stop().hide(100);
          //   }
          //   if ($(this).scrollTop() > 1700) {
          //     $('.c1').stop().show(80);
          //   } else {
          //     $('.c1').stop().hide(100);
          //   }
          //   if ($(this).scrollTop() > 2000) {
          //     $('.c3').stop().show(80);
          //   } else {
          //     $('.c3').stop().hide(100);
          //   }
          //   if ($(this).scrollTop() > 2200) {
          //     $('.c5').delay(100).show(80);
          //   } else {
          //     $('.c5').stop().hide(100);
          //   }
          //   if ($(this).scrollTop() > 2500) {
          //     $('.c4').stop().show(80);
          //   } else {
          //     $('.c4').stop().hide(100);
          //   }
          // });


// $('.buy').click(() => {
          //   $('.slideBox').addClass('active');
          // });

          // $('.return').click(() => {
          //   $('.slideBox').removeClass('active');
          // });

// $('html,body').append('<div id="fixedTop"></div>');

          // $('#fixedTop').on('click', function () {
          //   $('html,body').animate({ scrollTop: '0' }, 500);
          // });
          // $(window).on('load scroll resize', function () {
          //   let showTop = 800;
          //   let curScrollTop = $(this).scrollTop();
          //   fixedTop.fadeToggle(curScrollTop > showTop, 200);
          // });


