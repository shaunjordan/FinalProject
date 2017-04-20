//jQuery
$(document).ready(function () {
  $("#btn").click(function() {
    //$("#dropdown").toggleClass("nav-left");
    $("#dropdown").toggleClass("showmenu");
  });

  var viewport = $(window).width();
  if (viewport > 765) {
    $("#dropdown").removeClass("showmenu");
  }
});




// Below is first attempt code in pure JS for mobile navigation dropdown
//It's not pretty but I am leaving it here for my own learning purposes
/*function navigation() {
  document.getElementById("btn").onclick = function() {
      if (document.getElementById("dropdown").className == "showmenu") {
        document.getElementById("dropdown").className = "";
      } else {
        document.getElementById("dropdown").classname = "showmenu";
      }
  };
}


window.onload = function() {
  navigation();
}
*/
/*function toggleMenu() {
  document.getElementById("dropdown").classList.toggle("nav-left");
  document.getElementById("dropdown").classList.toggle("showmenu");
}*/
