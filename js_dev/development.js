jQuery(document).ready(function($) {

	// ADD JS INITS AND JS STUFF HERE
  $.slidebars();

  // PUTTING LANGUAGE TITLE TO THE CODE SNIPPETS
	$(function() {
	    $('.highlight').each(function() {
	        langLabel = $(this).children('pre').children().attr('data-lang');
	        $(this).prepend( '<span class="lang-label"></span>' );
	        $(this).children('.lang-label').text(langLabel);
	    });
	});


});