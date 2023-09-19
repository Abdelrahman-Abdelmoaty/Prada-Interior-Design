let header = document.querySelector("header");
let triggered = false;
document.addEventListener("scroll", () => {
  if (!triggered && scrollY > 70) {
    header.style.cssText = "transition: ease-in-out 0.5s; padding-bottom:0.75rem; padding-top:0.75rem;";
    triggered = true;
  } else if (triggered && scrollY < 70) {
    header.style.cssText = "transition: ease-in-out 0.5s; padding-bottom:1.5rem; padding-top:1.5rem;";
    triggered = false;
  }
});
