//Animating the header content.

$(function(){

    $("#banner").hide().delay(500).slideDown(500).fadeIn('fast');

});

$(function(){

    $("#banner2").hide().delay(800).slideDown(800).fadeIn('fast');

});


//Getting the page to auto scroll to the form when the header button is clicked

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


// Getting the 3 "solutions buttons to reveal their content on click

  $("show-print").hide();

  
$(function(){

  $(".print").click(function(){
    $("show-print").show();
});
})
