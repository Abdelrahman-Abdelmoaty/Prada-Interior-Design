// Elements
let header = document.querySelector("header");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let menu = document.querySelector(".menu");
let closeBtn = document.querySelector(".close");
let hero = document.querySelector(".hero");
let sections = Array.from(document.querySelectorAll("section"));
let section_1 = [document.querySelector(".section-1-right"), document.querySelector(".section-1-left"), sections[0].querySelector("img"), sections[0].querySelector("h3")];
let section_2 = [document.querySelector(".section-2-right"), document.querySelector(".section-2-left"), sections[1].querySelector("img"), sections[1].querySelector("h3")];
let section_3 = [
  sections[2].querySelector(".section-3-top"),
  sections[2].querySelector(".section-3-bottom"),
  sections[2].querySelector("img"),
  sections[2].querySelector(".section-3-card"),
];

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
  } else {
    section_1[0].style.cssText = "left: 900px; opacity:0";
    section_1[1].style.cssText = "right: 900px; opacity:0";
    section_1[2].style.cssText = "bottom: 500px; opacity:0";
    section_1[3].style.cssText = "bottom: 200px; opacity:0";
  }
  if (scroll > 0.5 * sections[1].offsetTop) {
    section_2[0].style.cssText = "left: 240px; opacity:1";
    section_2[1].style.cssText = "right: 240px; opacity:1";
    section_2[2].style.cssText = "bottom: 0; opacity:1";
    section_2[3].style.cssText = "bottom: 0; opacity:1";
  } else {
    section_2[0].style.cssText = "left: 900px; opacity:0";
    section_2[1].style.cssText = "right: 900px; opacity:0";
    section_2[2].style.cssText = "bottom: 500px; opacity:0";
    section_2[3].style.cssText = "bottom: 200px; opacity:0";
  }
  if (scroll > 0.75 * sections[2].offsetTop) {
    section_3[0].style.cssText = "right: 384px; opacity:1;";
    section_3[1].style.cssText = "bottom: 64px; opacity:1;  transform: rotate(360deg);";
    section_3[2].style.cssText = "right: 0; opacity:1";
    section_3[3].style.cssText = "right: 480px; opacity:1";
  } else {
    section_3[0].style.cssText = "right: -900px; opacity:0";
    section_3[1].style.cssText = "bottom: -900px; opacity:0";
    section_3[2].style.cssText = "right: 900px; opacity:0";
    section_3[3].style.cssText = "left: -420px; opacity:0";
  }
});

hamburgerMenu.addEventListener("click", () => {
  menu.style.right = 0;
});
closeBtn.addEventListener("click", () => {
  menu.style.right = -256;
});
