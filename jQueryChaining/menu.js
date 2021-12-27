// $(document).ready(function () {
//   $(".header-main-menu").hover(function () {
//     $(".header-main-menu").addClass("transit");
//     document.documentElement.style.overflow = "hidden";
//     document.body.scroll = "no";
//   });
//   $(document).ready(function () {
//     $(".header-main-menu").hover(function () {
//       $(".header-main-menu").addClass("transit");
//       document.documentElement.style.overflow = "hidden";
//       document.body.scroll = "no";
//     });
//     $(".close-icon, .link-btns").hover(function () {
//       $(".header-main-menu").removeClass("transit");
//       document.documentElement.style.overflow = "scroll";
//       document.body.scroll = "yes";
//     });
//     jQuery(document).on("keydown", function (e) {
//       if (e.keyCode === 27) {
//         // ESC
//         jQuery(".header-main-menu").removeClass("transit");
//         document.documentElement.style.overflow = "scroll";
//         document.body.scroll = "yes";
//       }
//     });
//   });
//   jQuery(document).on("keydown", function (e) {
//     if (e.keyCode === 27) {
//       // ESC
//       jQuery(".header-main-menu").removeClass("transit");
//       document.documentElement.style.overflow = "scroll";
//       document.body.scroll = "yes";
//     }
//   });
// });
var lastScrollPos = $(window).scrollTop();
var originalPos = $(".side-wrapper").offset().top;
if ($(".col-2").css("float") != "none") {
  $(window).scroll(function () {
    var rectbtfadPos = $(".rectbtfad").offset().top + $(".rectbtfad").height();
    // scroll up direction
    if (lastScrollPos > $(window).scrollTop()) {
      // unstick if scrolling the opposite direction so content will scroll with user
      if ($(".side-wrapper").css("position") == "fixed") {
        $(".side-wrapper").css({
          position: "absolute",
          top: $(".side-wrapper").offset().top + "px",
          bottom: "auto",
        });
      }
      // if has reached the original position, return to relative positioning
      if ($(window).scrollTop() + $("#masthead").height() < originalPos) {
        $(".side-wrapper").css({
          position: "relative",
          top: "auto",
          bottom: "auto",
        });
      }
      // sticky to top if scroll past top of sidebar
      else if (
        $(window).scrollTop() + $("#masthead").height() <
          $(".side-wrapper").offset().top &&
        $(".side-wrapper").css("position") == "absolute"
      ) {
        $(".side-wrapper").css({
          position: "fixed",
          top: 15 + $("#masthead").height() + "px", // padding to compensate for sticky header
          bottom: "auto",
        });
      }
    }
    // scroll down
    else {
      // unstick if scrolling the opposite direction so content will scroll with user
      if ($(".side-wrapper").css("position") == "fixed") {
        $(".side-wrapper").css({
          position: "absolute",
          top: $(".side-wrapper").offset().top + "px",
          bottom: "auto",
        });
      }
      // check if rectbtfad (bottom most element) has reached the bottom
      if (
        $(window).scrollTop() + $(window).height() > rectbtfadPos &&
        $(".side-wrapper").css("position") != "fixed"
      ) {
        $(".side-wrapper").css({
          width: $(".col-2").width(),
          position: "fixed",
          bottom: "0",
          top: "auto",
        });
      }
    }
    // set last scroll position to determine if scrolling up or down
    lastScrollPos = $(window).scrollTop();
  });
}
