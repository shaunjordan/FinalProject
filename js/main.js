//jQuery
$(document).ready(function () {
  //adds active class cover text on window open
  $(".covertext").addClass("activecover");
  //dropdown menu for mobile navigation
  $("#btn").click(function() {
    //$("#dropdown").toggleClass("nav-left");
    $("#dropdown").toggleClass("showmenu");
  });

  //removes showmenu class if screen > 765
  var viewport = $(window).width();
  if (viewport > 765) {
    $("#dropdown").removeClass("showmenu");
  }
});
