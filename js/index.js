const btn = document.getElementById("menu");
const nav = document.querySelector(".navbar");

btn.onclick = () => {
  btn.classList.toggle("open");
  nav.classList.toggle("active");
};

// swiper js

var swiper = new Swiper(".pricing__conatiner", {
  spaceBetween: 15,
  garbCursor: true,
  loop: true,
  autoplay: {
    delay: 3500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
