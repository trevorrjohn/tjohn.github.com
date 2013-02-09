$(function() {
  console.log($(".buttons"));
  $(".buttons").on('click', function(el) {
    var $target = $(el).children(':first');
    $target.is(':visible') ? $target.hide() : $target.show();
  });
});
