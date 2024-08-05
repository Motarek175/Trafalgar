// scroll up to top
let Up = document.querySelector(".top");

window.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY >= 400) {
    Up.style.transform = "scale(1)";
  } else {
    Up.style.transform = "scale(0)";
  }
};

Up.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// bars
let ul = document.querySelector(".header .con .links ul");
let toggle = document.querySelector(".header .con  .toggle");

toggle.addEventListener("click", () => {
  ul.classList.toggle("active");
});
