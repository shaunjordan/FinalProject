function buttonClick() {
document.getElementById("btn").addEventListener("click", navigation, true);
}

function navigation() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onload = function() {
  buttonClick();
}
