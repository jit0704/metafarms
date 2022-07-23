// publishing UI javascript
$(function(){
  // HTML include (퍼블리싱 확인용)
  if ($('[include-html]').length !== 0) {
    includeHTML();
    var includeHtml = $('[include-html]').attr('data-title');
    setTimeout(function(){
      $('#header-title').text(includeHtml);
    }, 10);
  }

  // ui 인터렉션 호출
  cmmnUi.init();
});

const cmmnUi = {
  init () {
    cmmnUi.btnGroupTab();
    cmmnUi.toggleSwitch();
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