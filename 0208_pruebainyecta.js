window.addEventListener('load' , ()=>{
    let inicio, curso, contacto, contenido;
    inicio = document.querySelector("#inicioAdd");
    curso = document.querySelector("#cursoAdd");
    contacto = document.querySelector("#contactoAdd");
    contenido = document.querySelector(".principal");

    contenido.innerHTML=`<img id="plow" src="media/mrplow.jpg" alt="homer quitanieves">
    <h1>NOTICIAS BREVES</h1>
    <p>Ya está aqui para usted Mr.quitanieves</p>
    <button>INFORMACION</button>`

    inicio.addEventListener('click', function(){
        contenido.innerHTML=`<img id="plow" src="media/mrplow.jpg" alt="homer quitanieves">
        <h1>NOTICIAS BREVES</h1>
        <p>Ya está aqui para usted Mr.quitanieves</p>
        <button>INFORMACION</button>`
    })

    curso.addEventListener('click' , function(){
        contenido.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/DFg1V-rO6Pg"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
         clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>`
    })

    contacto.addEventListener('click' , function(){
        contenido.innerHTML=`<div id="contform">
        <form action="" name="formulario">
            <label for="name" id="nombre" name="nombreDelAlumno">Nombre</label>
            <input type="text">
            <label for="email" id="email">Correo Electronico</label>
            <input type="text">
            <label for="topic" id="asunto">Asunto</label>
            <input type="text">
            <label for="mensaje" id="mensaje">Mensaje</label>
            <input type="text">
            <button id="addbutton" onclick="formulario()">Enviar</button>
        </form></div>`
    })

})

function formulario(){
    var alumno={
        nombres:document.querySelector("#nombre").value,
        correo: document.querySelector("#email").value,
        asunto: document.querySelector("#asunto").value,
        mensaje: document.querySelector("#mensaje").value
    }
    var alumnos = [];
    alumnos.push(alumno);
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}