document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide("#splide", {
    perPage: 1,
    pagination: false,
    type: "loop",
    autoplay: true,
    interval: 4000,
  });
  splide.mount();
  new Splide("#splide1", {
    type: "loop",
    drag: "free",
    pagination: false,
    arrows: false,
    perPage: 4,
    perMove: 1,
    autoplay: true,
    interval: 2000,
    breakpoints: {
      400: {
        perPage: 2,
      },
      768: {
        perPage: 3,
      },
      900: {
        perPage: 3,
      },
    },
  }).mount();
});
