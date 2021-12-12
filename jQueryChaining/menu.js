$(document).ready(function () {
  $(".header-main-menu").hover(function () {
    $(".header-main-menu").addClass("transit");
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
  });
  $(document).ready(function () {
    $(".header-main-menu").hover(function () {
      $(".header-main-menu").addClass("transit");
      document.documentElement.style.overflow = "hidden";
      document.body.scroll = "no";
    });
    $(".close-icon, .link-btns").hover(function () {
      $(".header-main-menu").removeClass("transit");
      document.documentElement.style.overflow = "scroll";
      document.body.scroll = "yes";
    });
    jQuery(document).on("keydown", function (e) {
      if (e.keyCode === 27) {
        // ESC
        jQuery(".header-main-menu").removeClass("transit");
        document.documentElement.style.overflow = "scroll";
        document.body.scroll = "yes";
      }
    });
  });
  jQuery(document).on("keydown", function (e) {
    if (e.keyCode === 27) {
      // ESC
      jQuery(".header-main-menu").removeClass("transit");
      document.documentElement.style.overflow = "scroll";
      document.body.scroll = "yes";
    }
  });
});
