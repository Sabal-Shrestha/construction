// const parallax_el = document.querySelectorAll(".parallax");
// const main = document.querySelector(".architecture>.hero");
// let xValue = 0,
//   yValue = 0;

// window.addEventListener("mousemove", (e) => {
//   xValue = e.clientX - window.innerHeight / 2;
//   yValue = e.clientY - window.innerHeight / 2;

//   parallax_el.forEach((el) => {
//     let speedx = el.dataset.speedx;
//     let speedy = el.dataset.speedy;
//     el.style.transform = `translateX(calc(-50% + ${
//       -xValue * speedx
//     }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
//   });
// });

const main = document.querySelector(".architecture");
const parallax_el = document.querySelectorAll(".parallax");
let yValue = 0;

window.addEventListener("scroll", (e) => {
  //   xValue = window.scrollX;
  yValue = window.scrollY;

  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    el.style.transform = `translateX(calc(-50% + ${
      -yValue * speedx
    }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  });
});
