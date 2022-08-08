// publishing UI javascript
$(function(){
  // 메인 키 비주얼
  var swiperVisual = new Swiper('.swiper-visual', {
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination'
    }
  });

  // 공지사항
  var swiperNotice = new Swiper('.swiper-notice', {
    direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    noSwipingClass: 'swiper-slide'
  });
});