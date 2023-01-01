var myNav = document.getElementById("nav");
let mybutton = document.getElementById("myBtn");
let loader = document.getElementById("preloader");

window.onscroll = function () {
  "use strict";
  if (window.matchMedia("only screen and (max-width: 768px)")) {
    if (
      document.body.scrollTop >= 60 ||
      document.documentElement.scrollTop >= 60
    ) {
      myNav.classList.add("scroll");
      mybutton.style.display = "block";
    } else {
      myNav.classList.remove("scroll");
      mybutton.style.display = "none";
    }
  }
};

window.addEventListener("load", function () {
  loader.style.display = "none";
});

AOS.init();
