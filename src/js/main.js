$(document).ready(function() {

	$('.phone-href').on('click', function() {
    var url = "tel:{PHONE}";
    $(location).attr('href', url);
  });

	// Action form onSubmit
  function call() {
 	  var msg = $(this).serialize();
 	  //var msg = $(form-id).serialize();
    $.ajax({
      type: 'POST',
      url: '../components/send.php',
      data: msg,
      success: function(data) {
        alert('Всё круто!');
      },
      error:  function(xhr, str){
  			alert('Возникла ошибка: ' + xhr.responseCode);
      }
    });
  }

	// Smooth to top action
	$(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });

  // Smooth the scroll action
  smoothScroll();
	function smoothScroll() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1500);
	        return false;
	      }
	    }
	  });
	}
});