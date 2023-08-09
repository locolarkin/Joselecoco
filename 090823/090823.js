$( document).ready(function(){

    $( function() {
    $( document ).tooltip();  
     } );

    $( function() {
        $( "#uno" ).on('click', function(){
        $("#p01").dialog();
        $( "#dialog01" ).dialog({
            position: { my: "left top", at: "left bottom", of: "#cont01" }
          });
          })    
          });

    $( function() {
        var state = true;
        $( "#dos" ).on( "click", function() { 
        $( "#cont02" ).animate({
              backgroundColor: "#aa0000",
              color: "#fff",
            }, 1000 ); 
        });
      } );

    $( function() {
    $( "#tres" ).on('click', function(){
    $("#p03").toggle('blind',1000);
    
        });    
        });

    $( function() {
        $( "#cuatro" ).on('click', function(){
        $("#p04").toggle('bounce',1000);
        
            });    
            });

    $( function() {
        $( "#cinco" ).on('click', function(){
        $("#p05").toggle('clip',1000);
        
            });    
            });

    $( function() {
        $( "#seis" ).on('click', function(){
        $("#p06").toggle('drop',1000);
        
            });    
            });

    $( function() {
        $( "#siete" ).on('click', function(){
        $("#p07").toggle('pulsate',500);
        
            });    
            });
    
    $( function() {
        $( "#ocho" ).on('click', function(){
        $("#p08").toggle('fade',1000);
        
            });    
            });
    
    $( function() {
        $( "#nueve" ).on('click', function(){
        $("#p09").toggle('fold',1000);
        
            });    
            });

    $( function() {
        $( "#diez" ).on('click', function(){
        $("#p10").toggle('shake',1000);
        
            });    
            });

    $( function() {
        $( "#once" ).on('click', function(){
        $("#cont11").css("background", "black");
        $("#cont11").css("color", "white");
        
            });    
            });
    $( function() {
        $( "#doce" ).on('click', function(){
        $(".contenedor").effect("explode", 1500);
        $(".botonerappal").effect("explode", 2000);
        $("img").effect("explode", 3000);
        
        
            });    
            });


     
       
   


   


  

 } );