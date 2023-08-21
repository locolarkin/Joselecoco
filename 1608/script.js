window.addEventListener('load', ()=>{
    let acceso, registro, info, curso, contacto, contenido;
    acceso = document.querySelector("#acceso");
    registro = document.querySelector("#registro");
    info = document.querySelector("#informacion");
    curso = document.querySelector("#curso");
    contacto = document.querySelector("#contacto");
    legal = document.querySelector("#legal");
    app = document.querySelector("#infoapp");
    contenido = document.querySelector(".w70");
    
// FORMULARIO DE ACCESO

    acceso.addEventListener('click', function() {
        contenido.innerHTML = `
            <div class="formulario">
                <h3>Acceso</h3>
                <form action="">
                    <label for="usuario">Usuario</label>
                    <input type="text" id="usuario" name="usuario">
    
                    <label for="contraseña">Contraseña</label>
                    <input type="password" id="contraseña" name="contraseña">
                    
                    <button id="botonAcceso" value="Acceso">Enviar</button>
                </form>
            </div>`;
    
        $("#botonAcceso").click(function(e) {
            e.preventDefault();
    
            var usuario = $('input[name="usuario"]').val();
            var contraseña = $('input[name="contraseña"]').val();
    
            var datos = `Usuario: ${usuario}<br>Contraseña: ${contraseña}`; 
    
            $("#userdata").html(datos); 
            $("#styleButtons").css("display","none");
        });
        
    });
   


    // TEMAS DE STILO
    
    $(document).ready(function() {
        $("#contraste").click(function() {
            $("body").toggleClass("dark-mode");
            $("li").toggleClass("dark-li");
            $("h3").toggleClass("dark-h3");          
        });
    });


    $(document).ready(function() {
        $("#magma").click(function() {
            $("body").toggleClass("magma-mode");
            $("li").toggleClass("magma-li");
            $("h3").toggleClass("magma-h3");          
        });
    });

    $(document).ready(function() {
        $("#forest").click(function() {
            $("body").toggleClass("forest-mode");
            $("li").toggleClass("forest-li");
            $("h3").toggleClass("forest-h3");          
        });
    });

    $(document).ready(function() {
        $("#cyberpunk").click(function() {
            $("body").toggleClass("cyber-mode");
            $("li").toggleClass("cyber-li");
            $("h3").toggleClass("cyber-h3");          
        });
    });


   // FORMULARIO DE REGISTRO

    registro.addEventListener('click', function() {
        contenido.innerHTML = `
            <div class="formulario">
                <h3>Registro</h3>
                <form>
                    <label>Nombre del Alumno</label>
                    <input type="text" id="nombreAñadir" name="nombre">
    
                    <label>Apellidos del Alumno</label>
                    <input type="text" id="apellidoAñadir" name="apellidos">
    
                    <label>Correo Electrónico</label>
                    <input type="email" id="emailAñadir" name="email">
    
                    <label>Contraseña</label>
                    <input type="password" id="contraseñaAñadir" name="contraseña">
    
                    <label>Url Imagen</label>
                    <input type="text" id="ImagenAñadir" name="imagen">
    
                    <button id="botonAñadir" value="Añadir">Enviar</button>
                </form>
                <p class="legal">Texto Legal.</p>
            </div>`;
    
        $("#botonAñadir").click(function(e) {
            e.preventDefault();
    
            var nombre = $('#nombreAñadir').val();
            var apellidos = $('#apellidoAñadir').val();
            var email = $('#emailAñadir').val();
            var contraseña = $('#contraseñaAñadir').val();
            var imagen = $('#ImagenAñadir').val();
            var datos = {
                nombre: nombre,
                apellidos: apellidos,
                email: email,
                contraseña: contraseña,
                imagen: imagen
            };
    
            // Obtener datos existentes del Local Storage (si los hay)
            var registros = JSON.parse(localStorage.getItem('registros')) || [];
            registros.push(datos);
    
            // Almacenar los datos actualizados en el Local Storage
            localStorage.setItem('registros', JSON.stringify(registros));
    
            // Limpiar el formulario
            $('input[type="text"], input[type="email"], input[type="number"], input[type="password"]').val('');
        });
    });
    

// COMPARANDO DATOS PARA ACCESO

$(document).ready(function() {
    var registroUsuario = "";
    var registroContraseña = "";

    $("#botonAñadir").click(function(e) {
        e.preventDefault();
        registroUsuario = $("#nombreAñadir").val();
        registroContraseña = $("#contraseñaAñadir").val();
        alert("Registro exitoso");
    });

    $("#botonAcceso").click(function(e) {
        e.preventDefault();
        var accesoUsuario = $("#usuario").val();
        var accesoContraseña = $("#contraseña").val();

        if (accesoUsuario === registroUsuario && accesoContraseña === registroContraseña) {
            alert("Acceso permitido");
        } else {
            alert("Acceso denegado. Verifica tus datos.");
        }
    });
});



    info.addEventListener('click', function(){
        contenido.innerHTML=`<div class="formulario">
        <h3>Información</h3>
        <p class="legal">Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br> Repellendus quo ut minus praesentium aliquam explicabo saepe quas, deserunt ab expedita dolor deleniti modi labore maxime?<br> Recusandae quaerat cupiditate corrupti laudantium?</p>
     </div>`
    })

    curso.addEventListener('click', function(){
        contenido.innerHTML=`<div class="formulario">
        <h3>Curso</h3>
        <video src="media/VideoClase.mp4" controls></video>
        <p class="legal">Todos los derechos legales reservados.</p>
     </div>`
    })
  

    contacto.addEventListener('click', function(){
        contenido.innerHTML=`<div class="formulario"><form action="">
        <label for="">Nombre</label>
        <input type="text" placeholder="Nombre y Apellidos">

        <label for="">Correo</label>
        <input type="email" placeholder="ejemplo@gmial.com">

        <label for="">Mensaje</label>
        <textarea name="" id="" cols="30" rows="10" placeholder="Escriba un comentario"></textarea>

        <button id="botonAñadir" value="Añadir" onclick="formulario()">Enviar</button>
     </form><p class="legal">Texto Legal.</p>
     </div>`
    })

    legal.addEventListener('click', function(){
        contenido.innerHTML=`<div class="formulario">
        <h3>Textos Legales</h3>
        <p class="legal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id velit sapiente perferendis, unde quia esse fugit aspernatur odio praesentium quidem placeat minus accusamus aut modi earum sequi iste corrupti.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id velit sapiente perferendis, unde quia esse fugit aspernatur odio praesentium quidem placeat minus accusamus aut modi earum sequi iste corrupti.</p>
     </div>`
    })

    app.addEventListener('click', function(){
        contenido.innerHTML=`<div class="formulario">
        <h3>Información de Uso de la Aplicación</h3>
        <p class="legal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id velit sapiente perferendis, unde quia esse fugit aspernatur odio praesentium quidem placeat minus accusamus aut modi earum sequi iste corrupti.<br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id velit sapiente perferendis, unde quia esse fugit aspernatur odio praesentium quidem placeat minus accusamus aut modi earum sequi iste corrupti.</p>
     </div>`
    })
})


$( function() {
    $( "#accordion" ).accordion();
  } );
