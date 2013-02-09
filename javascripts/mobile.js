$(function() { var b = $(".buttons"); for(var i = 0; i < b.length; i++) { $(b[i]).on('click', function(e) { var t = $(this).find('.info'); t.is(':visible') ? t.hide() : t.show(); }); }; });
