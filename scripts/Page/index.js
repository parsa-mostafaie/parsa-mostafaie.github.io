var str = "arsa Mostafaie";
var elem = document.getElementById("name");
var timeBetween = 50;
var delay = 10;

window.addEventListener("load", () =>
  appearChars(str, elem, timeBetween, delay)
);

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
  initialSlide: 1,
  breakpoints: {
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
  loop: true,
});
