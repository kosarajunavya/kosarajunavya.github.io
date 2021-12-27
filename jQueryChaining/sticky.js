$(document).ready(function () {
  $(window).scroll(function (e) {
    var $el = $(".sticky-container");
    var isPositionFixed = $el.css("position") == "fixed";
    if ($(this).scrollTop() > 400 && !isPositionFixed) {
      $el.css({ position: "fixed", top: "0", right: "500px" });
    }
    if ($(this).scrollTop() < 400 && isPositionFixed) {
      $el.css({ position: "absolute", top: "0", right: "38px" });
    }
  });
});
