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
  },
  btnGroupTab () { // 구매/자산관리 탭 메뉴
    $('.purchase-asset-group > .btn-group').on('click', '.btn-block', function () {
      var $this = $(this);
      var dataMate = $this.attr('data-mate');
      $this.parent().addClass('tab');
      $('.btn-group.tab .btn-block').removeClass('on');
      $this.addClass('on');
      $('.item-goods-buy').hide();
      $(`.item-goods-buy[data-mate=${dataMate}]`).show();
    });
  
    $('.purchase-asset-group > .btn-group').on('click', '.btn-block.on', function () {
      $(this).removeClass('on').parent().removeClass('tab');
      $('.purchase-asset-group .item-goods-buy').hide();
    });
  }
};