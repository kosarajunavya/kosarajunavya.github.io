$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#scrollToTopButton').fadeIn();
      } else {
        $('#scrollToTopButton').fadeOut();
      }
    });

    $('#scrollToTopButton').click(function() {
      $('html, body').animate({scrollTop : 0}, 800);
      return false;
    });
});
