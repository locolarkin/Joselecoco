$(document).ready(function(){
    console.log("Hasta aquí todo bien!!!")

    // $('#datos').load("https://reqres.in/")

//Recoger datos peticion AJAX
//Get y Post

$.get("https://reqres.in/api/users?page=2",{page: 2}, function(respuesta){

    respuesta.data.forEach((element, index)=>{
        $('#datos').append("<p>"+element.first_name+" "+element.last_name+"</p>");

    });

});

$('#formulario').submit(function(e){
e.preventDefault();
var usuario = {
    codigo: $('input[name="codigo"]').val(),
    nombre: $('input[name="nombre"]').val(),
    apellidos: $('input[name="apellidos"]').val(),
    email: $('input[name="email"]').val(),
    birth: $('input[name="birth"]').val(),
    foto: $('input[name="foto"]').val(),}


// $.post($(this).attr("action"),usuario, function(respuesta){
//     console.log(respuesta);
// }).done(function(){
//     alert("Usuario añadido correctamente")
// });

$.ajax({
    type:'POST',
    url: $(this).attr("action"),
    data: usuario,
    beforeSend: function(){
        console.log("Enviando usuario...")
    },
    success: function(respuesta){
        console.log(respuesta)
    },
    error: function(){
        console.log("A ocurrido un error")
    },
    timeout: 1000

})


})

});