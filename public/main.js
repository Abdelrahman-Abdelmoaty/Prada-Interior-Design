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
const section_5 = {
  middle: sections[4].querySelectorAll("img")[0],
  left: sections[4].querySelectorAll("img")[1],
  right: sections[4].querySelector("div"),
};
const section_6_cards_count = document.querySelectorAll(".section-6-card-count");
const section_7 = {
  left: sections[7].querySelector(".form"),
  right: sections[7].querySelector("img"),
};

function handleCount(idx, limit, delay) {
  let count = 0;
  let interval = setInterval(() => {
    section_6_cards_count[idx].textContent = count++;
    if (count > limit) clearInterval(interval);
  }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#preloader").style.display = "none";
  hero.querySelector("h2").classList.add("text-move-down");
});

let counted = false;
const handleScroll = throttle(() => {
  const scroll = window.scrollY;
  const isLargeScreen = window.innerWidth > 768;
  if (isLargeScreen) {
    header.classList.toggle("sticky", scroll > 0);
  }

  let windowHeight = window.innerHeight;
  let sectionsRevealTop = [];
  sections.forEach((s) => sectionsRevealTop.push(s.getBoundingClientRect().top));
  let revealPoint = 200;
  let hidePoint = 500;

  if (sectionsRevealTop[0] < windowHeight - revealPoint && -sectionsRevealTop[0] < windowHeight - hidePoint) {
    section_1.h3.classList.add("text-move-down");
    section_1.img.classList.add("move-down");
    section_1.right.classList.add("move-to-left");
    section_1.left.classList.add("move-to-right");
  } else {
    section_1.h3.classList.remove("text-move-down");
    section_1.img.classList.remove("move-down");
    section_1.right.classList.remove("move-to-left");
    section_1.left.classList.remove("move-to-right");
  }
  if (sectionsRevealTop[1] < windowHeight - revealPoint && -sectionsRevealTop[1] < windowHeight - hidePoint) {
    section_2.right.classList.add("move-to-left");
    section_2.left.classList.add("move-to-right");
    section_2.img.classList.add("move-down");
    section_2.h3.classList.add("text-move-down");
  } else {
    section_2.right.classList.remove("move-to-left");
    section_2.left.classList.remove("move-to-right");
    section_2.img.classList.remove("move-down");
    section_2.h3.classList.remove("text-move-down");
  }
  if (sectionsRevealTop[2] < windowHeight - revealPoint && -sectionsRevealTop[2] < windowHeight - hidePoint) {
    section_3.top.classList.add("move-to-right");
    section_3.bottom.classList.add("move-up");
    section_3.img.classList.add("move-to-right");
    section_3.card.classList.add("move-to-left");
  } else {
    section_3.top.classList.remove("move-to-right");
    section_3.bottom.classList.remove("move-up");
    section_3.img.classList.remove("move-to-right");
    section_3.card.classList.remove("move-to-left");
  }
  if (sectionsRevealTop[3] < windowHeight - revealPoint && -sectionsRevealTop[3] < windowHeight - hidePoint) {
    section_4.p.classList.add("move-down");
    section_4.card_1.classList.add("move-up");
    section_4.card_2.classList.add("move-down");
    section_4.card_3.classList.add("move-up");
  } else {
    section_4.p.classList.remove("move-down");
    section_4.card_1.classList.remove("card-show");
    section_4.card_2.classList.remove("card-show");
    section_4.card_3.classList.remove("card-show");
  }
  if (sectionsRevealTop[4] < windowHeight - revealPoint && -sectionsRevealTop[4] < windowHeight - hidePoint) {
    section_5.left.classList.add("move-to-right");
    section_5.middle.classList.add("move-down");
    section_5.right.classList.add("move-to-left");
  } else {
    section_5.left.classList.remove("move-to-right");
    section_5.middle.classList.remove("move-down");
    section_5.right.classList.remove("move-to-left");
  }
  if (sectionsRevealTop[6] < windowHeight - revealPoint && -sectionsRevealTop[6] < windowHeight - hidePoint) {
    if (!counted) {
      handleCount(0, 86, 20);
      handleCount(1, 65, 30);
      handleCount(2, 32, 40);
      handleCount(3, 15, 60);
      counted = true;
    }
  }
  if (sectionsRevealTop[7] < windowHeight - revealPoint && -sectionsRevealTop[7] < windowHeight - hidePoint) {
    section_7.left.classList.add("move-to-right");
    section_7.right.classList.add("move-to-left");
  } else {
    section_7.left.classList.remove("move-to-right");
    section_7.right.classList.remove("move-to-left");
  }
});
document.addEventListener("scroll", handleScroll);
function throttle(cb, delay = 250) {
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

hamburgerMenu.addEventListener("click", () => {
  menu.classList.add("hamburger-menu-show");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("hamburger-menu-show");
});

document.querySelectorAll("button").forEach((btn) =>
  btn.addEventListener("click", () => {
    open("https://www.linkedin.com/in/abdelrhman-abdelmoaty/", "_blank");
  })
);
