function appearChars(str, elem, timeBetween) {
  var index = -1;
  setTimeout(function go() {
    if (++index < str.length) {
      elem.innerHTML = elem.innerHTML + str.charAt(index);
      setTimeout(go, timeBetween);
    }
  }, delay);
}

// Menu
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

// darkmode
(function () {
  setTheme(getTheme());
})();

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "m") {
    location.href = "/";
  }
});

// Create Change Theme Button
let chngthBTN = document.createElement("button");

(function () {
  chngthBTN.innerHTML = `Theme`;

  chngthBTN.classList.add("btn-grad", "bottom-this", "no-margin");
  chngthBTN.addEventListener("click", changeTheme);
  chngthBTN.addEventListener("contextmenu", autoTheme);
  chngthBTN.addEventListener("long-press", autoTheme);

  document.body.append(chngthBTN);
})();

function changeTheme() {
  setTheme(!getTheme());
}

function autoTheme() {
  localStorage.removeItem("isDark");
  setTheme(getTheme());
}

function setTheme(isDark = false) {
  let isLight = !isDark;

  isLight
    ? document.documentElement.removeAttribute("dark")
    : document.documentElement.setAttribute("dark", "dark");

  localStorage.setItem("isDark", isDark.toString());
}

function getTheme() {
  return (
    (localStorage.getItem("isDark") || sys_def_theme())
      .toString()
      .toLowerCase() == "true"
  );
}

function sys_def_theme() {
  let darkMedia =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  return darkMedia;
}

// Scroll
{
  let lastScrollTop = 0;

  window.addEventListener(
    "scroll",
    function () {
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

// Loading...
let loading = document.createElement("div");

(function () {
  loading.id = "__load__ing__";

  loading.innerHTML = `<div class="ring" css-no-select>Loading<span></span></div>`;

  document.body.classList.add("loading");

  document.body.appendChild(loading);
  document.body.classList.add("loading");
})();

window.addEventListener("load", () => {
  loading.parentElement.removeChild(loading);
  document.body.classList.remove("loading");
});

// Pass Toggler
let Togglers = document.querySelectorAll("[data-pass-toggle]");
for (let toggler of Togglers) {
  toggler.addEventListener("mousedown", () => {
    let target = document.querySelector(
      toggler.getAttribute("data-pass-toggle")
    );
    target.type = "text";
  });
  toggler.addEventListener("mouseup", () => {
    let target = document.querySelector(
      toggler.getAttribute("data-pass-toggle")
    );
    target.type = "password";
  });
  toggler.addEventListener("long-press", () => {
    let target = document.querySelector(
      target.getAttribute("data-pass-toggle")
    );
    target.type = target.type == "password" ? "text" : "password";
  });
}
