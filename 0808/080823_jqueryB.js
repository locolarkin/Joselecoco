$( document).ready(function(){

$( function() {
    $( ".puntos" ).draggable();
    $( document ).tooltip();
    } );

$( function(){
    $( "#dialog01" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 500
        },
        hide: {
          effect: "fade",
          duration: 500
        }
      });
   
      $( "#opener01" ).on( "dblclick", function() {
        $( "#dialog01" ).dialog( "open" );
        $( "#dialog01" ).dialog({
            position: { my: "left top", at: "left bottom", of: "#opener01" }
          });
      });

      $( "#dialog02" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 500
        },
        hide: {
          effect: "fade",
          duration: 500
        }
      });
      $( "#opener02" ).on( "dblclick", function() {
        $( "#dialog02" ).dialog( "open" );
        $( "#dialog02" ).dialog({
            position: { my: "left top", at: "left bottom", of: "#opener02" }
          });
      });

      $( "#dialog03" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 500
        },
        hide: {
          effect: "fade",
          duration: 500
        }
      });
      $( "#opener03" ).on( "dblclick", function() {
        $( "#dialog03" ).dialog( "open" );
        $( "#dialog03" ).dialog({
            position: { my: "left top", at: "left bottom", of: "#opener03" }
          });
      });

      $( "#dialog04" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 500
        },
        hide: {
          effect: "fade",
          duration: 500
        }
      });
      $( "#opener04" ).on( "dblclick", function() {
        $( "#dialog04" ).dialog( "open" );
        $( "#dialog04" ).dialog({
            position: { my: "left top", at: "left bottom", of: "#opener04" }
          });
      });

      $( "#dialog05" ).dialog({
        autoOpen: false,
        show: {
          effect: "blind",
          duration: 500
        },
        hide: {
          effect: "fade",
          duration: 500
        }
      });
      $( "#opener05" ).on( "dblclick", function() {
        $( "#dialog05" ).dialog( "open" );
        $( "#dialog05" ).dialog({
            position: { my: "left top", at: "left bottom", of: "#opener05" }
          });
      });


  } );
} );



