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
    
    $('.hideBtn').click(function(e) {
 		 $('div.rowDetails div').addClass('hidden');
         //e.preventDefault();
	});
    $('#filterButtons li').click(function(e) {
		var catFilter= $(this).attr('data-filter');
        $('ul#filterButtons li.current').removeClass('current');
        $(this).addClass('current');
 		$('ul#projectBut li').each(function() {
    		if($(this).hasClass(catFilter)) {
      			$(this).fadeIn('slow').removeClass('hidden');
    		} else {
				$(this).fadeOut('normal').addClass('hidden');
      			
    		}
		});
         e.preventDefault();
	});
    
   
});