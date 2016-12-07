//Animating the header content.

$(function(){

    $("#banner").hide().delay(500).slideDown(500).fadeIn('fast');

});

$(function(){

    $("#banner2").hide().delay(600).slideDown(800).fadeIn('fast');
    
});


//Open and close the solutions sections

$(function(){
    $('.show-print').hide();
    $('.show-copy').hide();
    $('.show-photo').hide();

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
