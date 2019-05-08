$(document).ready(function() {
    $('.gallery').unslider();
});

$(function(){
    if($(window).width() > 640) {
        $("#typingAnimation").typed({
          strings: ["Engineer", "Aspiring entrepreneur", "Eclectically curious", "Thinker & Do-er", "Passionate techie", "Keen eye for good design", "Basketball fanatic", "Part-time guitarist", "Builder of cool products", "Film aficionado", "Bookworm", "Science enthusiast", "Ambitious philomath", "Armchair economist"],
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
