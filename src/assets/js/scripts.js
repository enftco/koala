window.onscroll = () => {
  const header = document.querySelector("header");
  const navFix = header.offsetTop;

  if (window.pageYOffset > navFix) {
    header.classList.add("nav-fixed");
  } else {
    header.classList.remove("nav-fixed");
  }
}

const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
});
