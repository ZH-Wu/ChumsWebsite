$(function () {
  $('.dropdown').click(function () {
    $(this).toggleClass('active').parent().siblings().find('.dropdown').removeClass('active').siblings().slideUp();
    $(this).siblings().slideToggle();
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
  //   disableOnInteraction: true,
  // },
  freeMode: {
    momentumBounce: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: false,
  },
});

lightbox.option({
  'resizeDuration': 500,
  'wrapAround': true
});

