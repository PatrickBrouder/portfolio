$(document).ready(function() {
	
    $('#project1').click(function(e) {
        $('#project2Det').addClass('hidden');
        $('#project3Det').addClass('hidden');
		$('#project1Det').toggleClass('hidden');
        e.preventDefault();
	});
    $('#project2').click(function(e) {
        $('#project1Det').addClass('hidden');
        $('#project3Det').addClass('hidden');
		$('#project2Det').toggleClass('hidden');
        e.preventDefault();
	});
    $('#project3').click(function(e) {
        $('#project2Det').addClass('hidden');
        $('#project1Det').addClass('hidden');
		$('#project3Det').toggleClass('hidden');
        e.preventDefault();
	});
   
});