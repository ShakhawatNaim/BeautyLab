//navbar bg color after scroll
let navBar = document.querySelector("nav");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 50) {
    navBar.classList.add("navbar-bg", "shadow");
  } else {
    navBar.classList.remove("navbar-bg", "shadow");
  }
});

// carousel
$(".carousel-one").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 7000,
  slideBy: 3,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".carousel-two").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 7000,
  slideBy: 3,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
