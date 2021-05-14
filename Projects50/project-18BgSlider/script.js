const body = document.body,
  slides = document.querySelectorAll(".slide"),
  leftBtn = document.getElementById("left"),
  rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}
// $(document).ready(function () {
//   let activeSlide = 0;
//   $("#left").click(function () {
//     activeSlide++;
//     if (activeSlide > slides.length - 1) {
//       activeSlide = 0;
//     }
//     setBgToBody();
//     setActiveSlide();
//   });

//   function setBgToBody() {
//     $(document.body).css(
//       "backgroundImage",
//       ".slides[activeSlide].css.backgroundImage"
//     );
//   }

//   function setActiveSlide() {
//     $(".slide").each(function (index) {
//       $(".slide").removeClass("active");
//       $(".slide").addClass("active");
//     });

//   }
// });
