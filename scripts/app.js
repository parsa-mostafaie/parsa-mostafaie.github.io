let appearChar = (char, elem, t) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      elem.innerHTML += char;
      res();
    }, t);
  });
async function appearChars(str, elem, timeBetween, delay) {
  if (str.length <= 0) return false;
  elem.innerHTML = str[0];
  await appearChar("", elem, delay);
  for (let i = 1; i < str.length; i++) {
    await appearChar(str[i], elem, timeBetween);
  }
  return true;
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

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "m") {
    location.href = "/";
  }
});

// fontAwesome
window.addEventListener("load", () => {
  let fontAwesome = document.createElement("link");
  fontAwesome.rel = "stylesheet";
  fontAwesome.href = "/assets/fontawesome/css/all.css";
  let headTag = document.querySelector("head");
  headTag.appendChild(fontAwesome);
});

// Create Change Theme Button && DARKMODE
let chngthBTN = document.createElement("button");

(function () {
  chngthBTN.innerHTML = `<i class='fa fa-moon'></i>`;

  chngthBTN.classList.add("bottom-this");
  chngthBTN.style.cssText =
    "border: none; outline: none; background: darkblue; color: blue; margin: 5px; font-size: 1.5rem; padding: 5px; border-radius: 50%; min-width: 2em; aspect-ratio: 1;";
  chngthBTN.addEventListener("click", changeTheme);
  chngthBTN.addEventListener("contextmenu", autoTheme);
  chngthBTN.addEventListener("long-press", autoTheme);

  document.body.append(chngthBTN);
})();

(function () {
  setTheme(getTheme());
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

  let chI = chngthBTN.querySelector("i");

  chI.classList.add(isLight ? "fa-moon" : "fa-sun");
  chI.classList.remove(isDark ? "fa-moon" : "fa-sun");
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

//*
let lzl = document.querySelectorAll("[load-scale], section, footer");

const percentageSeen = (element) => {
  // Get the relevant measurements and positions
  const viewportHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const elementOffsetTop = element.offsetTop;
  const elementHeight = element.offsetHeight;

  // Calculate percentage of the element that's been seen
  const distance = scrollTop + viewportHeight - elementOffsetTop;
  const percentage = Math.round(
    distance / ((viewportHeight + elementHeight) / 100)
  );

  // Restrict the range to between 0 and 100
  return Math.max(0, percentage);
};

(function () {
  lzl.forEach((el) => {
    let f = () => {
      let percent = percentageSeen(el);

      if (percent > 5) {
        el.classList.remove("load-0");
      }
      if (percent > 95 || percent == 0) {
        el.classList.add("load-0");
      }
    };
    window.addEventListener("scroll", f);
    el.classList.add("load-0");
    el.classList.add("trans");
    f();
  });
})();

// FAVICON FOR ALL Pages
window.addEventListener("load", () => {
  let favicon = `<link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />`;

  let titleTag = document.querySelector("title");

  titleTag.insertAdjacentHTML("afterend", favicon);
});
