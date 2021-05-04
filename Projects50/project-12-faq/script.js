const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

// $(function () {
//   $(".faq-toggle").each(function () {
//     $(this).click(function () {
//       $(this).parent().toggleClass("active");
//     });
//   });
// });
