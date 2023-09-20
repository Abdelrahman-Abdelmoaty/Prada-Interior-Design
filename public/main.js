// Elements
const header = document.querySelector("header");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const hero = document.querySelector(".hero");
const sections = Array.from(document.querySelectorAll("section"));
const section_1 = {
  right: document.querySelector(".section-1-right"),
  left: document.querySelector(".section-1-left"),
  img: sections[0].querySelector("img"),
  h3: sections[0].querySelector("h3"),
};
const section_2 = {
  right: document.querySelector(".section-2-right"),
  left: document.querySelector(".section-2-left"),
  img: sections[1].querySelector("img"),
  h3: sections[1].querySelector("h3"),
};
const section_3 = {
  top: sections[2].querySelector(".section-3-top"),
  bottom: sections[2].querySelector(".section-3-bottom"),
  img: sections[2].querySelector("img"),
  card: sections[2].querySelector(".section-3-card"),
};
const section_4 = {
  p: sections[3].querySelector("p"),
  card_1: sections[3].querySelectorAll(".card")[0],
  card_2: sections[3].querySelectorAll(".card")[1],
  card_3: sections[3].querySelectorAll(".card")[2],
};

// Effects
hero.querySelector("h2").style.cssText = "transition:ease-in-out 1s; opacity:1; bottom:0;";

const handleScroll = throttle(() => {
  console.log("scrolled");
  const scroll = window.scrollY;
  const isLargeScreen = window.innerWidth > 768;
  if (isLargeScreen) {
    if (scroll > 70) {
      header.style.cssText = "transition: ease-in-out 0.5s; padding-bottom:0.75rem; padding-top:0.75rem;";
    } else {
      header.style.cssText = "transition: ease-in-out 0.5s; padding-bottom:1.5rem; padding-top:1.5rem;";
    }
  }
  if (scroll > 1.2 * hero.offsetTop) {
    section_1.right.style.cssText = "left: 240px; opacity:1";
    section_1.left.style.cssText = "right: 240px; opacity:1";
    section_1.img.style.cssText = "bottom: 0; opacity:1";
    section_1.h3.style.cssText = "bottom: 0; opacity:1";
  } else {
    section_1.right.style.cssText = "left: 200px; opacity:0";
    section_1.left.style.cssText = "right: 200px; opacity:0";
    section_1.img.style.cssText = "bottom: 500px; opacity:0";
    section_1.h3.style.cssText = "bottom: 200px; opacity:0";
  }
  if (scroll > 1.2 * sections[0].offsetTop) {
    section_2.right.style.cssText = "left: 240px; opacity:1";
    section_2.left.style.cssText = "right: 240px; opacity:1";
    section_2.img.style.cssText = "bottom: 0; opacity:1";
    section_2.h3.style.cssText = "bottom: 0; opacity:1";
  } else {
    section_2.right.style.cssText = "left: 200px; opacity:0";
    section_2.left.style.cssText = "right: 200px; opacity:0";
    section_2.img.style.cssText = "bottom: 500px; opacity:0";
    section_2.h3.style.cssText = "bottom: 200px; opacity:0";
  }
  if (scroll > 1.2 * sections[1].offsetTop) {
    section_3.top.style.cssText = "right: 384px; opacity:1;";
    section_3.bottom.style.cssText = "bottom: 64px; opacity:1;  transform: rotate(360deg);";
    section_3.img.style.cssText = "right: 0; opacity:1";
    section_3.card.style.cssText = "right: 480px; opacity:1";
  } else {
    section_3.top.style.cssText = "right: -200px; opacity:0";
    section_3.bottom.style.cssText = "bottom: -200px; opacity:0";
    section_3.img.style.cssText = "right: 200px; opacity:0";
    section_3.card.style.cssText = "left: -420px; opacity:0";
  }
  if (scroll > 1.2 * sections[2].offsetTop) {
    section_4.p.style.cssText = "bottom: 0; opacity:1;";
    section_4.card_1.style.cssText = "height: 360px; opacity: 1;";
    section_4.card_2.style.cssText = "height: 360px; opacity: 1;";
    section_4.card_3.style.cssText = "height: 360px; opacity: 1;";
  } else {
    section_4.p.style.cssText = "bottom: 200px; opacity:0;";
    section_4.card_1.style.cssText = "height: 0; opacity: 0;";
    section_4.card_2.style.cssText = "height: 0; opacity: 0;";
    section_4.card_3.style.cssText = "height: 0; opacity: 0;";
  }
});

function throttle(cb, delay = 500) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}

document.addEventListener("scroll", handleScroll);

hamburgerMenu.addEventListener("click", () => {
  menu.style.right = 0;
});
closeBtn.addEventListener("click", () => {
  menu.style.right = -256;
});
