// // $(document).ready(function () {
// //   var isOpen = false;
// //   $(".searchbox-icon").click(function () {
// //     if (isOpen == false) {
// //       $(".searchbox").addClass("searchbox-open");
// //       $(".searchbox-input").focus();
// //       isOpen = true;
// //     } else {
// //       $(".searchbox").removeClass("searchbox-open");
// //       $(".searchbox-input").focusout();
// //       isOpen = false;
// //     }
// //   });
// //   $(".searchbox-icon").mouseup(function () {
// //     return false;
// //   });
// //   $(".searchbox").mouseup(function () {
// //     return false;
// //   });
// //   $(document).mouseup(function () {
// //     if (isOpen == true) {
// //       $(".searchbox-icon").css("display", "block");
// //       $(".searchbox-icon").click();
// //     }
// //   });

// //   function buttonUp() {
// //     var inputVal = $(".searchbox-input").val();
// //     inputVal = $.trim(inputVal).length;
// //     if (inputVal !== 0) {
// //       $(".searchbox-icon").css("display", "none");
// //     } else {
// //       $(".searchbox-input").val("");
// //       $(".searchbox-icon").css("display", "block");
// //     }
// //   }
// //   $("input").keyup(function () {
// //     buttonUp();
// //   });
// // });
// $(document).ready(function () {
//   console.log("document ready!");

//   var $sticky = $(".sticky");
//   var $stickyrStopper = $(".sticky-stopper");
//   if (!!$sticky.offset()) {
//     // make sure ".sticky" element exists

//     var generalSidebarHeight = $sticky.innerHeight();
//     var stickyTop = $sticky.offset().top;
//     var stickOffset = 0;
//     var stickyStopperPosition = $stickyrStopper.offset().top;
//     var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
//     var diff = stopPoint + stickOffset;

//     $(window).scroll(function () {
//       // scroll event
//       var windowTop = $(window).scrollTop(); // returns number

//       if (stopPoint < windowTop) {
//         $sticky.css({ position: "absolute", top: diff });
//       } else if (stickyTop < windowTop + stickOffset) {
//         $sticky.css({ position: "fixed", top: stickOffset });
//       } else {
//         $sticky.css({ position: "absolute", top: "initial" });
//       }
//     });
//   }
// });
// $(document).scroll(function () {
//   $("#sticky").css({
//     top: "0",
//     position: $(this).scrollTop() > 400 ? "fixed" : "relative",
//   });
// });
for (x = 0, y = results.features.length; x < y; x++) {
  resultsStr +=
    '<div class="accordion-item">' +
    "<h3>Tract: " +
    results.features[x].attributes.TRACT +
    "</h3>" +
    '<div class="accordion-content">' +
    "<p>Owner: " +
    results.features[x].attributes.OWNER +
    "</p>" +
    "</div>" +
    "</div>";
}
