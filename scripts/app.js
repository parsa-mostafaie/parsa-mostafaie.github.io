function appearChars(str, elem, timeBetween) {
  var index = -1;
  setTimeout(function go() {
    if (++index < str.length) {
      elem.innerHTML = elem.innerHTML + str.charAt(index);
      setTimeout(go, timeBetween);
    }
  }, delay);
}

var ulMenuP = document.querySelector("nav");

var ulLiA = document.querySelectorAll("ul > li > a");

ulLiA.forEach((item) => {
  item.addEventListener("click", () => {
    ulMenuP.classList.remove("shown");
    check_menu_state();
  });
});

function change_menu_state() {
  if (ulMenuP) {
    var media_query = window.matchMedia("(max-width: 768px)");
    var matchMedia = media_query.matches;

    if (matchMedia) {
      ulMenuP.classList.toggle("shown");
    } else {
      ulMenuP.classList.remove("shown");
    }
  }
}

function check_menu_state() {
  if (ulMenuP) {
    var media_query = window.matchMedia("(max-width: 768px)");
    var matchMedia = media_query.matches;

    if (!matchMedia) {
      ulMenuP.classList.remove("shown");
    }
  }
}

window.addEventListener("resize", check_menu_state);

window.addEventListener("load", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get("theme");

  if (theme == "dark") {
    document.documentElement.setAttribute("dark", "dark");
  }
});

let chngth = document.getElementById("chngTh");
chngth.addEventListener("click", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get("theme");

  if (theme == "dark") {
    location.href = location.href.split("?")[0] + "?theme=light";
  } else {
    location.href = location.href.split("?")[0] + "?theme=dark";
  }
});
