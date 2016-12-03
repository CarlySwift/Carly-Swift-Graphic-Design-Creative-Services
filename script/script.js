$(function(){

    $("#banner").hide().delay(500).slideDown(500).fadeIn('fast');

});


$(function() {
  // Generic selector to be used anywhere
  $(".js-scroll-to").click(function(e) {

    // Get the href dynamically
    var destination = $(this).attr('email-me');

    // Animate scroll to destination
    $('html, body').animate({
      scrollTop: $(destination).offset().top
    }, 500);
  });
});
