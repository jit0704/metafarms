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
});