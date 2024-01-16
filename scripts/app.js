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
