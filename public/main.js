// Elements
let header = document.querySelector("header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let menu = document.querySelector(".menu");
let closeBtn = document.querySelector(".close");
let hero = document.querySelector(".hero");
let sections = Array.from(document.querySelectorAll("section"));
let section_1 = [document.querySelector(".section-1-right"), document.querySelector(".section-1-left"), sections[0].querySelector("img"), sections[0].querySelector("h3")];

// Effects
hero.querySelector("h2").style.cssText = "transition:ease-in-out 1s; opacity:1; bottom:0;";

document.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (window.innerWidth > 768) {
    if (scroll > 70) {
      header.style.cssText = "transition: ease-in-out 0.5s; padding-bottom:0.75rem; padding-top:0.75rem;";
    } else {
      header.style.cssText = "transition: ease-in-out 0.5s; padding-bottom:1.5rem; padding-top:1.5rem;";
    }
  }
  if (scroll > 0.5 * sections[0].offsetTop) {
    section_1[0].style.cssText = "left: 240px; opacity:1";
    section_1[1].style.cssText = "right: 240px; opacity:1";
    section_1[2].style.cssText = "bottom: 0; opacity:1";
    section_1[3].style.cssText = "bottom: 0; opacity:1";
  }
});

hamburgerMenu.addEventListener("click", () => {
  menu.style.right = 0;
});
closeBtn.addEventListener("click", () => {
  menu.style.right = -256;
});
