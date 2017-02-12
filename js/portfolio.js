$(document).ready(function() {
	
    $('.rowInfo div').click(function(e) {
		var catFilter= $(this).attr('data-filter');
 		$('div.rowDetails div').each(function() {
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
    
   
});