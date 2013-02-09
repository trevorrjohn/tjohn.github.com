$(function() {
  alert("hi");
  $().find(".buttons").on('click', function(el) {
    var $target = $(el).children(':first');
    $target.is(':vissible') ? $target.hide() : $target.show();
  });
});
