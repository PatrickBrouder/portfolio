// JavaScript Document
$( "#testInput" ).keyup(function() {
    $('#testButton').html($(this).val());
  });

$('#testButton').click(function() {
	$('#buttonFunctions').removeClass('hide');
});

$(function() {
    $( "#tabs" ).tabs();
  });

$(function() {
	$( "#fontPicker" ).selectmenu();
});

$(function() {
	$( "#fontSize" ).slider({
	range: "max",
      min: 8,
      max: 78,
      value: 2,
	  slide: function( event, ui ) {
        $( "#size" ).val( ui.value );
      }
    });
    $( "#size" ).val( $( "#fontSize" ).slider( "value" ) );
  });
	
function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }
  function refreshSwatch() {
    var red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
    $( "#swatch" ).css( "background-color", "#" + hex );
  }
  $(function() {
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );
  });
