//jQuery
$(document).ready(function () {
  $("#btn").click(function() {
    //$("#dropdown").toggleClass("nav-left");
    $("#dropdown").toggleClass("showmenu");
  });

  //removes showmenu if screen > 765
  var viewport = $(window).width();
  if (viewport > 765) {
    $("#dropdown").removeClass("showmenu");
  }
  var imageNumber = 0;
  var images = [];
  var time = 3000;

  images[0] = "../images/welcome.jpg";
  images[1] = "../images/tab.jpg";
  images[2] = "../images/expert.jpg";
  images[3] = "../images/contact.jpg";

  function changeImage() {
    $(".sliding").css("background-image", "url('"+ images[imageNumber] +"')");
    imageNumber++;
    if (imageNumber >= images.length)
      imageNumber = 0;
    setInterval("changeImage()", time);
  }

  //cycles through background-images
  /*function cycle() {
    $(".sliding").delay(5000).fadeOut(2000, function(){
      $(".sliding").css("background-image", "url('../images/tab.jpg')");
      $(".sliding").fadeIn(2000, function() {
        $(".sliding").delay(5000).fadeOut(1000, function() {
          $(".sliding").css("background-image", "url('../images/contact.jpg')");
          $(".sliding").fadeIn(2000, cycle);
        });
      });
    });
  }
  cycle();*/
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
