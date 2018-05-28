AOS.init();

$(document).ready(function() {
  $(".navigation-button").click(function() {
    $(this).toggleClass('active');
    $("ul").toggleClass('active');
  });
});

