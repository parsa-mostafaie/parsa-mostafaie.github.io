var str = "arsa Mostafaie";
var elem = document.getElementById("name");
var timeBetween = 50;
var delay = 10;

window.addEventListener("load", () =>
  appearChars(str, elem, timeBetween, delay)
);

// swiper
const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    // when window width is >= 800px
    800: {
      slidesPerView: 2,
      centeredSlides: true
    },
  },
  loop: true,
});
