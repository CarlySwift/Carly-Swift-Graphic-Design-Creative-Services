//Animating the header content.

$(function(){

    $("#banner").hide().delay(500).slideDown(500).fadeIn('fast');

});

$(function(){

    $("#banner2").hide().delay(800).slideDown(800).fadeIn('fast');

});

$(function(){
    $('.print').click(function() {
        $('.show-print').slideToggle(400);
    });
    $('.copywriting').click(function() {
        $('.show-copy').slideToggle(400);
    });
    $('.photography').click(function() {
        $('.show-photo').slideToggle(400);
    });

//Main cta scroll to form
    $("#banner2").click(function() {
    $('html, body').animate({
        scrollTop: $(".email").offset().top
    }, 1000);
    });

//Nav button scroll to div
    $(".about").click(function() {
        $('html, body').animate({
            scrollTop: $(".designer").offset().top
        }, 500);
    });
    $(".work").click(function() {
        $('html, body').animate({
            scrollTop: $(".some-work").offset().top
        }, 500);
    });
    $(".contact").click(function() {
        $('html, body').animate({
            scrollTop: $(".email").offset().top
        }, 500);
    });
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
