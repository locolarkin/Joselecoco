$(document).ready(function(){
var rojo = $("#rojo");
rojo
.css('background-color',"red")
.css("color","white");
$("#amarillo")
.css('background-color',"yellow")
.css("color","black");
$("#verde")
.css('background-color',"green")
.css("color","white");

rojo.addClass('recuadro');
$("#amarillo").removeClass(".recuadro");


var elemento = $('.recuadro');
elemento
.css("border", "2px solid black")
.css("font-size", "1.5em")

$('[title=google]').css('color','red')
$('[title]').css('text-decoration','none')

//Eventos

var contenedor = $('#contenedor');

function cambiaRojo(){
    $(this).css("background","red");
}
function cambiaVerde(){
    $(this).css("background","green");
}

contenedor.hover(cambiaRojo,cambiaVerde);

$(document).mousemove(function(){
    $('body').css("cursor","none");
    $('#sigueme')
    .css("left", event.clientX)
    .css("top",event.clientY)
});

$('add-button')
.click(function(){
$('#menu').preend('<li><a href="'+$
('#add-link').val()+'">Ir a nuevo enlace</a></li>');
$('add-link').val('');

})

function reloadLinks(){
    $('a').each(function(index){
        var esto = $(this);
        var enlace = esto.attr("href");
        esto.attr("target", "_blank")
        esto.text(enlace);
        console.log(esto);
    })
    }
$('#animar').click(function(){
    var caja=$('#contenedor');

    caja.animate({
        marginLeft: '500px',
        fontSize: '40px',
        height:'120px'}, 'slow')
        .animate({
            borderRadius: '25%',
            marginTop: '200px'
        }, 'fast')
        })

});