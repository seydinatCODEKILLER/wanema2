document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#splide", {
    perPage: 4,
    perMove: 1,
    pagination: false,
    gap: "10px",
    type: "loop",
    autoplay: true,
    interval: 5000,
    breakpoints: {
      400: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      900: {
        perPage: 4,
      },
    },
  });
  splide.mount();
  new Splide("#splide1", {
    perPage: 4,
    perMove: 1,
    pagination: false,
    gap: "10px",
    type: "loop",
    autoplay: true,
    interval: 7000,
    breakpoints: {
      400: {
        perPage: 1,
      },
      768: {
        perPage: 2,
      },
      900: {
        perPage: 4,
      },
    },
  }).mount();
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
