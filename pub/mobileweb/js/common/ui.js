// publishing UI javascript
$(function(){
  // HTML include (퍼블리싱 확인용)
  if ($('[include-html]').length !== 0) {
    includeHTML();
    var includeHtml = $('[include-html]').attr('data-title');
    setTimeout(function(){
      $('#header-title').text(includeHtml);
    }, 100);
  }

  // ui 인터렉션 호출
  cmmnUi.init();
});

const cmmnUi = {
  init () {
    cmmnUi.dynamicAddClass();
    cmmnUi.accordion();
    cmmnUi.modalPopup();
    cmmnUi.btnGroupTab();
    cmmnUi.toggleSwitch();
  },
  dynamicAddClass () { // 특정 페이지 style 수정을 위해 body 밑의 부모 요소에 class추가
    var $wrap = $('.wrap');
    if ($('.join').length !== 0) {
      $wrap.addClass('join-wrap');
    }
  },
  accordion () { // 아코디언
    $(document).on('click', '[data-accordion="target"]', function (e) {
      e.preventDefault();
      var $this = $(this);
      var $accordionContent= $this.closest('li').find('[data-accordion="content"]');
      $('[data-accordion="content"]').slideUp(150);
      if ($accordionContent.css('display') === 'none') {
        $accordionContent.slideToggle(150);
      }
    });
  },
  modalPopup () { // 모달 팝업
    // 모달 팝업 호출 이벤트
    $(document).on('click', '.btn-modal-call', function (e) {
      e.preventDefault();
      var $this = $(this);
      var $hash = $this.attr('href');
      $($hash).fadeIn(200);
    });

    // 모달 팝업 닫기 이벤트
    $(document).on('click', '.btn-modal-close', function (e) {
      e.preventDefault();
      var $this = $(this);
      $this.closest('.modal').fadeOut(200);
    });
  },
  btnGroupTab () { // 구매/자산관리 탭 메뉴
    var $targetBtnGroup = $('.purchase-asset-group > .btn-group');
    $targetBtnGroup.on('click', '.btn-block', function () {
      var $this = $(this);
      var dataMate = $this.attr('data-mate');
      $targetBtnGroup.removeClass('tab');
      $this.parent().addClass('tab');
      $('.btn-group .btn-block').removeClass('on');
      $this.addClass('on');
      $('.item-goods-buy').hide();
      $(`.item-goods-buy[data-mate=${dataMate}]`).show();

      // 자산관리 버튼 클릭시 하단 라인 변경
      if ($this.is('.btn-deposit')) {
        $this.parent().removeClass().addClass('btn-group tab');
      } else if ($this.is('.btn-withdraw')) {
        $this.parent().removeClass().addClass('btn-group tab bot-line-blue');
      } else if ($this.is('.btn-breakdown') || $this.is('.btn-lockup')) {
        $this.parent().removeClass().addClass('btn-group tab bot-line-skyblue');
      }
    });
  
    $targetBtnGroup.on('click', '.btn-block.on', function () {
      $(this).removeClass('on').parent().removeClass().addClass('btn-group');
      $('.purchase-asset-group .item-goods-buy').hide();
    });
  },
  toggleSwitch () { // 자산관리 > 외부/내부 출금 토글 버튼
    var $toggleBtn = $('.toggle-switch');
    $toggleBtn.on('click', function () {
      var $this = $(this);
      var $slideEl = $this.children();
      var $outsideCon = $('.outside-withdraw');
      var $insideCon = $('.inside-withdraw');
      if ($this.is('.outside')) {
        $this.removeClass('outside').addClass('inside');
        $slideEl.text('내부출금');
        $outsideCon.hide();
        $insideCon.show();
      } else if ($this.is('.inside')) {
        $this.removeClass('inside').addClass('outside');
        $slideEl.text('외부출금');
        $insideCon.hide();
        $outsideCon.show();
      }
    });
    $toggleBtn.on('click', 'span', function (e) {
      e.stopPropagation();
    });
  }
};