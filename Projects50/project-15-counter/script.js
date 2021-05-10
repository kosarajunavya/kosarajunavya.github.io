// const counters = document.querySelectorAll(".counter");

// counters.forEach((counter) => {
//   counter.innerText = "0";

//   const updateCounter = () => {
//     const target = +counter.getAttribute("data-target");
//     const c = +counter.innerText;

//     const increment = target / 200;

//     if (c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCounter();
// });

$(document).ready(function () {
  $(".counter").each(function () {
    var $this = $(this),
      target = $this.attr("data-target");

    $({ countNum: $this.text() }).animate(
      {
        countNum: target,
      },
      {
        duration: 2000,
        step: function () {
          $this.text(Math.ceil(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
});
