var isOpen = false;
$(".searchbox-icon").click(function () {
  if (isOpen == false) {
    $(".searchbox").addClass("searchbox-open");
    $(".searchbox-input").focus();
    isOpen = true;
  } else {
    $(".searchbox").removeClass("searchbox-open");
    $(".searchbox-input").focusout();
    isOpen = false;
  }
});
$(".searchbox-icon").mouseup(function () {
  return false;
});
$(".searchbox").mouseup(function () {
  return false;
});
$(document).mouseup(function () {
  if (isOpen == true) {
    $(".searchbox-icon").css("display", "block");
    $(".searchbox-icon").click();
  }
});

function buttonUp() {
  var inputVal = $(".searchbox-input").val();
  inputVal = $.trim(inputVal).length;
  if (inputVal !== 0) {
    $(".searchbox-icon").css("display", "none");
  } else {
    $(".searchbox-input").val("");
    $(".searchbox-icon").css("display", "block");
  }
}
$(".searchbox-submit").keyup(function () {
  buttonUp();
});
