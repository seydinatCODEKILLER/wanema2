document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide2", {
    perPage: 3,
    perMove: 1,
    pagination: false,
    gap: "20px",
    type: "loop",
    autoplay: true,
    interval: 4000,
    breakpoints: {
      400: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      900: {
        perPage: 3,
      },
    },
  }).mount();
});
