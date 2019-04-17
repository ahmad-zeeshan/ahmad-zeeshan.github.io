$('li h2[data-type="vitamin"]').css('background', '#1648e9');
$('li h2[data-type="mineralwater"]').css('background', '#1648e9');
$('li h2[data-type="proteinbar"]').css('background', '#1648e9');

$("li").css({"cursor":"pointer"});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  var x = $('#history').clone().prop({'id' : 'history-clone'})
$('#history').after(x)
    x[0].innerText = 'something here'
    $(x).text('I love football')
    $(x).css('background', '#9e9e9e')
    