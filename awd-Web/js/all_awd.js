$(function () {

  // 指定卷軸到指定高度再執行淡入淡出效果
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    $('.c2').stop().toggle(scrollTop > 200, 80);
    $('.c1').stop().toggle(scrollTop > 250, 80);
    $('.c3').stop().toggle(scrollTop > 300, 80);
  });

  // 碰到放大鏡顯示對話框
  // $('.magnifier').click(function () {
  //   $(this).siblings('.chatBox').fadeToggle();
  // });


  // 點擊放大鏡顯示商品
  $('.magnifier').click(function () {
    $(this).siblings('.chatBox, .product-box').fadeToggle();
  });


  // 點擊立即購買出現下滑選單
  $('.enter').click(function() {
    $(this).siblings('.floatBox').toggleClass('active');
    
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

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 50,
  freeMode: true,
  loop: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter:true,
    disableOnInteraction:false,
    
  }  
  
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


// $('.enter').click(() => {
          //   $('.floatBox').addClass('active');
          // });

          // $('.return').click(() => {
          //   $('.floatBox').removeClass('active');
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


