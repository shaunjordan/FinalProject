//jQuery
$(document).ready(function () {
  $(".covertext").addClass("activecover");
  $("#btn").click(function() {
    //$("#dropdown").toggleClass("nav-left");
    $("#dropdown").toggleClass("showmenu");
  });

  //removes showmenu if screen > 765
  var viewport = $(window).width();
  if (viewport > 765) {
    $("#dropdown").removeClass("showmenu");
  }

  /*/cycles through background-images
  var i = 0;
  var time = setInterval(changeImg, 6000);
  function changeImg(){
   //background images
   var images = ["./images/welcome.jpg","./images/tab.jpg","./images/expert.jpg", "./images/contact.jpg"];
  $('.sliding').css('background', 'url("' + images[i] + '")' + 'no-repeat');
  $('.sliding').css('background-size', 'cover');
    if(i == images.length -1){
         i = 0;
    }
    else{
        i++;
    }
  } //end of changeImg()
    //codesnippet modified from
    //http://stackoverflow.com/questions/5977837/jquery-loop-through-different-backgrounds
  var count = -1;
  function addClass(){
  var covertext = $(".covertext");
  var coverLength = covertext.length - 1;
  count < coverLength ? count++ : count = 0;
  covertext.removeClass("activecover").eq(count).addClass("activecover");
  }
  setInterval(addClass, 6000);*/

});
