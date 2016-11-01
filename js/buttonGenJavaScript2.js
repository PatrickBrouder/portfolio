// JavaScript Document
$( "#testInput" ).keyup(function() {
    $('#testButton').html($(this).val());
  });

$('#testButton').click(function() {
	$('#buttonFunctions').removeClass('hide');
});
$('.hideFunction').click(function() {
	$('#buttonFunctions').addClass('hide');
});

$(function() {
    $( "#tabs" ).tabs();
  });
$(function() {
    $('#testButton').css("font-family", $("#fontType").val());
  });

$( "#fontType" ).change(function() {
   $('#testButton').css("font-family", $(this).val());
});

$( "#fontColorHex" ).keyup(function() {
    $('#testButton').css( "color", "#" + $(this).val() );
});

$( "#buttonColorHex" ).keyup(function() {
    $('#testButton').css( "background-color", "#" + $(this).val() );
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
	  
    	$( "#testButton" ).css( "background-color", "#" + hex );
	 
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

function hexFromRGB2(r, g, b) {
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

  function refreshSwatch2() {
    var red = $( "#red2" ).slider( "value" ),
      green = $( "#green2" ).slider( "value" ),
      blue = $( "#blue2" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
	  
    	$( "#testButton" ).css( "color", "#" + hex );
	 
  }
  $(function() {
    $( "#red2, #green2, #blue2" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch2,
      change: refreshSwatch2
    });
    $( "#red2" ).slider( "value", 0 );
    $( "#green2" ).slider( "value", 0 );
    $( "#blue2" ).slider( "value", 0 );
  });

$(function() {
	$( "#fontSize" ).slider({
	range: "max",
      min: 8,
      max: 72,
      value: 16,
	  slide: function( event, ui ) {
        $( "#size" ).val( ui.value );
          $( "#testButton" ).css( "font-size",$( "#fontSize" ).slider( "value" )  );
      }
    });
    $( "#size" ).val( $( "#fontSize" ).slider( "value" ) );
    $( "#testButton" ).css( "font-size",$( "#fontSize" ).slider( "value" )  );
  });


$('#buttonHtml').click(function() {
	$('#textButtonHtml').text($('#buttonDiv').html());
    var buttonHtmlCss = $('#textButtonHtml').html();
    var seperateButton = buttonHtmlCss.split('" ');
    var buttonStyle = seperateButton[1];
    var seperateButton2 = buttonStyle.split(';"');

    var buttonHtml = seperateButton[0]+seperateButton2[1];

    var buttonStyling =seperateButton2[0];
    var arr1 = buttonStyling.split('; ');
    var sty2 =arr1[0];
    var sty3 =arr1[1];
    var sty4 =arr1[2];
    var arr5 = sty2.split('style="');

    $("#textButtonHtml").html("Button HTML Code: </br></br>" +buttonHtml +"</br></br>Button CSS Code: </br></br>#testButton { </br>" +arr5[1]+ ";</br>" + arr1[1]+";</br>"+arr1[2] +";</br>" +arr1[3] +";</br>" +arr1[4]+";</br>}");
    
    
  
});

$(function() {
	$( "#buttonPadding" ).slider({
	range: "max",
      min: 0,
      max: 100,
      value: 10,
	  slide: function( event, ui ) {
        $( "#buttonPaddingSize" ).val( ui.value );
          $( "#testButton" ).css( "padding",$( "#buttonPadding" ).slider( "value" )  );
      }
    });
    $( "#buttonPaddingSize" ).val( $( "#buttonPadding" ).slider( "value" ) );
    $( "#testButton" ).css( "padding",$( "#buttonPadding" ).slider( "value" )  );
  });
