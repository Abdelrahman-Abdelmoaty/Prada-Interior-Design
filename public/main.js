let header = document.querySelector("header");
let triggered = false;
document.addEventListener("scroll", () => {
  console.log(header.offsetHeight);
  if (!triggered && scrollY > 70) {
    header.style.cssText = "transition: ease-in-out 0.5s; padding-bottom:0.75rem; padding-top:0.75rem; ";
    triggered = true;
  }
});
