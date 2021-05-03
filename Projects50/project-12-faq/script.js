const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

// $(function () {
//   $(".faq-toggle").click(function () {
//     $(".faq-toggle").toggleClass("active");
//   });
// });
