document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide1", {
    perPage: 4,
    perMove: 1,
    pagination: false,
    arrows: false,
    gap: "15px",
    type: "loop",
    autoplay: true,
    interval: 7000,
    breakpoints: {
      400: {
        perPage: 1,
        arrows: true,
      },
      768: {
        perPage: 2,
        arrows: true,
      },
      900: {
        perPage: 4,
      },
    },
  }).mount();
});
