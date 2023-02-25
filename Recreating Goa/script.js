let currentSlideIndex = 0;
// const slides = document.querySelectorAll(".slide");
// const btnRiht = document.querySelector("btnRight");
// const btnLeft = document.querySelector("btnLeft");
const carousalSlider = document.querySelectorAll(".carousal-slider");
const carousalBtnNext = document.querySelector(".btn-next");
const carousalBtnPrev = document.querySelector(".btn-prev");
const carousalTrack = document.querySelector(".carousal_track");
const slides = document.querySelectorAll(".carousal-slider");
const dotsNav = document.querySelector(".carousal_nav_section");
const dots = Array.from(document.querySelectorAll(".carousal_indicator_dots"));
const carImg = Array.from(document.querySelectorAll(".carousal_img"));

// when i click btnNext, slider should move to the next slide
//when i click right, slider should move to the right slide
// when i click dot, slider move to that slide
console.log(slides);
//Looping hrough slides to move them to the left
slides.forEach((slidess, index) => {
  slidess.style.left = `${index * 100}%`;
});

// loopin through slides to move them right on screen
var slideImage = () => {
  slides.forEach((slidess) => {
    slidess.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    console.log("ok");
  });
};

//listening to the next button

carousalBtnNext.addEventListener("click", () => {
  console.log("work");
  currentSlideIndex++;
  if (currentSlideIndex == slides.length) {
    currentSlideIndex = 0;
  }
  slideImage();
});
// Listeniing to the previous button
carousalBtnPrev.addEventListener("click", () => {
  if (currentSlideIndex < 1) {
    currentSlideIndex = slides.length;
  }

  currentSlideIndex--;
  slideImage();
  console.log("work");
});

console.log(dots);

function dotas(dot, index) {
  dot.addEventListener("click", (e) => {
    if (dots[0]) {
      carImg[0].style.transform = `translateX(0%)`;
    }
  });
}

console.log(slides);

console.log(carImg);

console.log(dots);

///. carousal section swiper JS

//.optionbar rotating sign

const optionIcon = document.querySelector(".optionNavIcon");
const optionLia = document.getElementsByClassName(".listitemAnchor");

//  optionLi.forEach((lis) => {
//   lis.addEventListener("mouseover", () => {
//     lis.style.color = red;
//     console.log("working");
//   });
// });
console.log(optionLia);
console.log(optionIcon);
