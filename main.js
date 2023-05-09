const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider-img");
const dots = document.querySelectorAll(".dot");

let index = 0;

function slide() {
  images[index].classList.remove("active");
  dots[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
  dots[index].classList.add("active");
}

setInterval(slide, 3000);

dots.forEach((dot, dotIndex) => {
  dot.addEventListener("click", () => {
    images[index].classList.remove("active");
    dots[index].classList.remove("active");
    index = dotIndex;
    images[index].classList.add("active");
    dots[index].classList.add("active");
  });
});
