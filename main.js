const parallaxContainers = document.querySelectorAll(".parallax-container");

parallaxContainers.forEach((parallaxContainer) => {
  const parallax_mel = parallaxContainer.querySelectorAll(".parallax-mouse");
  let mxValue = 0,
    myValue = 0;

  parallaxContainer.addEventListener("mousemove", (e) => {
    mxValue = e.clientX - parallaxContainer.offsetLeft - window.innerHeight / 2;
    myValue = e.clientY - parallaxContainer.offsetTop - window.innerHeight / 2;

    parallax_mel.forEach((el) => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;
      el.style.transform = `
        scale(1.4)
        translateX(calc(-15% - ${mxValue * speedx}px))
        translateY(calc(-50% - ${myValue * speedy}px))
        `;
    });
  });

  parallaxContainer.addEventListener("mouseout", () => {
    parallax_mel.forEach((el) => {
      el.style.transform = "";
    });
  });
});

const parallax_sel = document.querySelectorAll(".parallax-scroll");
let syValue = 0;

window.addEventListener("scroll", (e) => {
  //   xValue = window.scrollX;
  syValue = window.scrollY;

  parallax_sel.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    el.style.transform = `translateX(calc(-50% + ${
      -syValue * speedx
    }px)) translateY(calc(-50% + ${syValue * speedy}px))`;
  });
});
