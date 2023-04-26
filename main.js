// const parallaxContainers = document.querySelectorAll(".parallax-container");

// parallaxContainers.forEach((parallaxContainer) => {
//   const parallax_mel = parallaxContainer.querySelectorAll(".parallax-mouse");
//   let mxValue = 0,
//     myValue = 0;

//   parallaxContainer.addEventListener("mousemove", (e) => {
//     const rect = parallaxContainer.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     mxValue = (e.clientX - centerX) / 50;
//     myValue = (e.clientY - centerY) / 50;

//     parallax_mel.forEach((el) => {
//       let speedx = el.dataset.speedx;
//       let speedy = el.dataset.speedy;
//       let translateX = "";
//       let translateY = "";
//       if (mxValue > 0) {
//         translateX = `translateX(calc(50% + ${Math.abs(mxValue * speedx)}px))`;
//       } else {
//         translateX = `translateX(calc(50% - ${Math.abs(mxValue * speedx)}px))`;
//       }
//       if (myValue > 0) {
//         translateY = `translateY(calc(50% + ${Math.abs(myValue * speedy)}px))`;
//       } else {
//         translateY = `translateY(calc(50% - ${Math.abs(myValue * speedy)}px))`;
//       }
//       el.style.transform = `
//         scale(1.4)
//         ${translateX}
//         ${translateY}
//         `;
//     });
//   });

//   parallaxContainer.addEventListener("mouseout", () => {
//     parallax_mel.forEach((el) => {
//       el.style.transform = "";
//     });
//   });
// });
const parallaxContainers = document.querySelectorAll(".parallax-container");

parallaxContainers.forEach((parallaxContainer) => {
  const parallax_mel = parallaxContainer.querySelectorAll(".parallax-mouse");
  let mxValue = 0,
    myValue = 0;

  parallaxContainer.addEventListener("mousemove", (e) => {
    const containerRect = parallaxContainer.getBoundingClientRect();
    mxValue = e.clientX - containerRect.left - containerRect.width / 2;
    myValue = e.clientY - containerRect.top - containerRect.height / 2;

    parallax_mel.forEach((el) => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;
      el.style.transform = `
        scale(1.4) 
        translateX(calc(0% + ${-mxValue * speedx}px)) 
        translateY(calc(0% + ${-myValue * speedy}px))`;
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
