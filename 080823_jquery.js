// ACORDEON
$( document).ready(function(){


$( function() {
    $( "#accordion" ).accordion();
    $( document ).tooltip();
    
  } );



// CONTRASTE
$("#contraste").click(function(){
    $(".ui-accordion .ui-accordion-header").css("background-color", "black");
    $(".ui-accordion .ui-accordion-header").css("color","white");
    $("body").css("background-color", "black");
    $("body").css("color","white");
    $("header").css("background-color", "black");
    $("a").css("color","white");
    $("footer").css("color","white");
    $("footer").css("background-color", "black");
    $("#seccion4").css("color","white");
    $("#seccion4").css("background-color", "black");
})

$("#accesible").click(function(){
    $("body").css("font-size", "120%")
})
})