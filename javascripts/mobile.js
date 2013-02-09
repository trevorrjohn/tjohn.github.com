$(function() {
  var triggers = $(".buttons");
  for(var i = 0; i < triggers.length; i++) {
    $(triggers[i]).on('click', function(e) {
      var $target = $(this).find('.info');
      $target.is(':visible') ? $target.hide() : $target.show();
      $().blur();
      return false;
    });
  };
});
