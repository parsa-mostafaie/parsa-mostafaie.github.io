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

let _isDark = localStorage.getItem("isDark") || "false";

if (_isDark == "true") {
  document.documentElement.setAttribute("dark", "dark");
}

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "m") {
    location.href = "/";
  }
});

// Create Change Theme Button
let chngthBTN = document.createElement("button");

chngthBTN.innerHTML = `Theme`;

chngthBTN.classList.add("btn-grad", "bottom-this", "no-margin");
chngthBTN.addEventListener("click", changeTheme);
chngthBTN.addEventListener("contextmenu", autoTheme);
chngthBTN.addEventListener("long-press", autoTheme);

document.body.append(chngthBTN);

function changeTheme() {
  let isDark = document.documentElement.matches("[dark]");

  isDark
    ? document.documentElement.removeAttribute("dark")
    : document.documentElement.setAttribute("dark", "dark");

  isDark
    ? localStorage.setItem("isDark", "false")
    : localStorage.setItem("isDark", "true");
}

function autoTheme(e) {
  e.preventDefault();
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    let isDark = document.documentElement.matches("[dark]");
    if (!isDark) {
      changeTheme();
    }
  }
}

// Scroll Direction
{
  let lastScrollTop = 0;

  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener(
    "scroll",
    function () {
      // or window.addEventListener("scroll"....
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        chngthBTN.style.display = "none";
      } else if (st < lastScrollTop) {
        chngthBTN.style.display = "block";
      } // else was horizontal scroll
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    false
  );
}
