$(document).ready(function() {
	
    $('#projectBut li').click(function(e) {
		var catFilter= $(this).attr('data-filter');
 		$('div#projects div').each(function() {
    		if($(this).hasClass(catFilter)) {
      			$(this).fadeIn('slow').removeClass('hidden');
    		} else {
				$(this).fadeOut('normal').addClass('hidden');
      			
    		}
		});
         //e.preventDefault();
	});
    
   
});