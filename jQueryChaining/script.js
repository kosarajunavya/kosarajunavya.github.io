//example-1
$(document).ready(function () {
  $("#btn1").click(function () {
    $("#chain").css("background-color", "Aqua").slideUp(1000).slideDown(1000);
  });
  // example-2
  $("#hide").click(function () {
    $("p").css("font-size", "5rem").hide(2000);
  });
});
