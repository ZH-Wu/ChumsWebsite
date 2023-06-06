$(function () {
  $('.dropdown').click(function() {
    $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active').siblings().slideUp();
    $(this).siblings().slideToggle();
  });
});

$(function () {
  // 選取名為filterBtn的div區域
  let setFilter = $('.sidebar');
  // 從名為filterBtn的div區域內，找出a標籤元素
  let filterBtn = setFilter.find('a');
  

  // 選取名為filterList的div區域
  let setList = $('.swiper-wrapper');
  // 從名為filterList的div區域內，找出li標籤元素
  let filterList = setList.find('.swiper-slide');
  // 從名為filterList的div區域內，取得li標籤元素的寬度
  let listWidth = filterList.outerWidth();

  // 處理篩選後的結果
  // 當filterBtn內的任一a標籤被點擊時，
  filterBtn.click(function () {
    // 檢查是否被點選狀態，不是的話才執行篩選
    // 使用NOT運算子(!)，有變成沒有，沒有變成有
    // this代表filterBtn
    if (!($(this).hasClass('active'))) {
      // 目前被點選的按鈕類別保存起來給變數filterClass
      // attr('屬性', '值')
      let filterClass = $(this).attr('class');

      // 使用each()方法，逐一把同類別的圖片篩選出來
      filterList.each(function () {
        //檢查li標籤內是否有符合的篩選類別
        if ($(this).hasClass(filterClass)) {
          // 有找到
          // 顯示圖片動畫效果
          // 1. 調整容納該類別圖片的總寬度
          $(this).css({ display: 'block' }).stop().animate({ width: listWidth }, 800);
          // find()方法，括號內的'*'將用來尋找所有的標籤
          $(this).find('*').stop().animate({ opacity: '1' }, 800);
        } else {
          // 沒找到
          // 隱藏圖片(動畫 animate來呈現)
          $(this).find('*').stop().animate({ opacity: '0' }, 800);
          $(this).stop().animate({ width: '0' }, 800, function () {
            $(this).css({ display: 'none' });
          });
        }

      });
      // 清除所有篩選按鈕的active類別
      filterBtn.removeClass('active');
      // 將目前的篩選按鈕加上active類別
      $(this).addClass('active');
    }
  });

});

var swiper = new Swiper(".mySwiper", {
      speed: 1000,
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerGroupSkip: 2,
      spaceBetween: 150,
      freeMode: true,
      grabCursor: true,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

      }
    });

    lightbox.option({
      'resizeDuration': 500,
      'wrapAround': true
    });

