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

  //cycles through background-images
  //sets css values

  var i = 0;
  var time = setInterval(changeImg, 2000);
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
  //var classes = ["covertext1","covertext2","covertext3","covertext4"];
  //function covertextActive(){
  //  for (var i = 0; i <= classes.legth; i++) {
  //    $(classes[i]).toggleClass('active');
  //  }


    //if(){
    //  $(classes[i]).toggleClass("active")
    //}

  //end covertextActive()

});


//http://stackoverflow.com/questions/21909709/add-dynamic-class-to-ul-li-with-set-interval-timing
