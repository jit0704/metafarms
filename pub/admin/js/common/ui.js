$(function(){
  // gnb 메뉴
  $('.ly-header .ui.dropdown').dropdown({
    on: 'hover',
    action: 'nothing',
    delay: {
      hide: 100,
      show: 100,
    }
  });

  // 필터 컨테이너 셀렉트 박스
  $('.fliter-container .ui.dropdown').dropdown();

  // 테이블 셀렉트 박스
  $('.ui.table .ui.dropdown').dropdown();
});