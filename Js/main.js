$(document).ready(function() {
    $('.gallery').unslider();
});

$(function(){
    if($(window).width() > 640) {
        $("#typingAnimation").typed({
          strings: ["Software Developer", "Aspiring entrepreneur", "Eclectically curious", "Thinker & Do-er", "Passionate techie", "Keen eye for good design", "Football fanatic", "Love Cooking", "Builder of cool products", "Film aficionado", "Traveller", "Science enthusiast", "Business-Oriented", "Love family"],
          typeSpeed: 50,
          backDelay: 1000,
          loop: true,
          loopCount: false,
          callback: function(){}
        });
    } else {
          $(".typing").hide();
          $("#typed-cursor").hide();
          $("#typeAnimation").hide();
    }
});
