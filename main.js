//Parallax Scrolling from Scrolling Start
const sections = document.querySelectorAll("section");

function isSectionInViewport(section) {
  const rect = section.getBoundingClientRect();
  const offset = rect.height * 0.6; // 60% offset
  return (
    rect.top <= window.innerHeight - offset &&
    window.pageYOffset <= section.offsetTop + offset
  );
}

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const parallaxEls = section.querySelectorAll(".parallax-scroll");
    let wasSectionInViewport = section.classList.contains("in-viewport");
    let isSectionNowInViewport = isSectionInViewport(section);

    if (isSectionNowInViewport && !wasSectionInViewport) {
      let syValue = 0;
      section.classList.add("in-viewport");
    }

    if (isSectionNowInViewport) {
      let syValue = window.scrollY;
      parallaxEls.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `
        translateX(calc(0% + ${-syValue * speedx}px))
        translateY(calc(0% + ${syValue * speedy}px))`;
      });
    } else {
      section.classList.remove("in-viewport");
    }
  });
});

//Parallax Scrolling from Scrolling End

//Parallax Scrolling from Mouse Start
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
//Parallax Scrolling from Mouse End

//Navs and tabs filter Start
filterObjects("all");
function filterObjects(c) {
  var x, i;
  x = document.getElementsByClassName("box");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// add "active" class to the "All" menu item by default
document.querySelector(".menu li:first-child").classList.add("active");

// add click event listener to menu items
document.querySelectorAll(".menu li").forEach(function (item) {
  item.addEventListener("click", function () {
    // remove "active" class from all menu items
    document.querySelectorAll(".menu li").forEach(function (item) {
      item.classList.remove("active");
    });
    // add "active" class to clicked menu item
    this.classList.add("active");
    // filter objects based on the clicked menu item
    filterObjects(this.getAttribute("data-filter"));
  });
});
//Navs and tabs filter End
