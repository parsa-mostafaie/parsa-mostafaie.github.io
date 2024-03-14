var elem = document.getElementById("name");
var timeBetween = 50;
var delay = 10;
var str;

{
  let $flag = false;

  function f() {
    let $str = window.matchMedia("(min-width: 400px)").matches
      ? "Parsa Mostafaie"
      : "Parsa";

    if ($str == str) return;
    str = $str;
    if ($flag) return;
    $flag = true;
    appearChars($str, elem, 50, 10).then(() => ($flag = false));
  }
}

window.addEventListener("load", f);

window.addEventListener("resize", f);

// swiper
const swiper = new Swiper(".swiper", {
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      centeredSlides: true,
      initialSlide: 1,
    },
  },
  loop: true,
});
