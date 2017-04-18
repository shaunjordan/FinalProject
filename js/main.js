function navigation() {
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
