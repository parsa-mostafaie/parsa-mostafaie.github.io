function appearChars(str, elem, timeBetween) {
  var index = -1;
  (function go() {
    if (++index < str.length) {
      elem.innerHTML = elem.innerHTML + str.charAt(index);
      setTimeout(go, timeBetween);
    }
  })();
}

var str = "Programmer Boy";
var elem = document.getElementById("pboy");
var timeBetween = 50;

appearChars(str, elem, timeBetween);

var ulMenuP = document.querySelector("nav");

function change_menu_state() {
  var media_query = window.matchMedia("(max-width: 768px)");
  var matchMedia = media_query.matches;

  if (matchMedia) {
    ulMenuP.classList.toggle("shown");
  } else {
    ulMenuP.classList.remove("shown");
  }
}

function check_menu_state() {
  var media_query = window.matchMedia("(max-width: 768px)");
  var matchMedia = media_query.matches;

  if (!matchMedia) {
    ulMenuP.classList.remove("shown");
  }
}

window.addEventListener("resize", check_menu_state);
