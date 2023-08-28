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

$("#dark").click(function(){
    $("body").css("background-color", "black");
    $("body").css("color","white");
    $("header").css("background-color", "white");
    $("a").css("color","black");
    $("footer").css("color","white");
    $("footer").css("background-color", "black");
})




// MODAL

const modal_container = document.getElementById("modal_container")
    const modal_btn1 = document.getElementById("modal_btn1")
    const modal_btn2 = document.getElementById("modal_btn2")

    window.addEventListener("load", () => {
      createModal(`
        <h3 class="modal-title">Abrir modal Emergente</h3>
        <img class="modal-img" src="media/7498232_33144.jpg" alt="">
        <p class="modal-description">Hola modal emergente</p>
        <button class="modal-btn">Contratar</button>
        <a href="#" target="_blank" rel="noopener noreferrer" class="modal-link">Link</a>
      `, "modal-aparecer")
    })

    modal_btn1.addEventListener("click", () => {
      createModal(`
        <h3>Abrir modal 1</h3>
        <img src="media/mrplow.jpg" alt="">
        <a href="#" target="_blank" rel="noopener noreferrer">Contratar !!</a>
      `, "modal-desdeArriba")
    })

    modal_btn2.addEventListener("click", () => {
        createModal(`
        <h3>Abrir modal 2</h3>
        <img src="media/avion.jpg" alt="">
        <a href="#" target="_blank" rel="noopener noreferrer">Contratar !!</a>
      `,"modal-desdeAbajo" )
    })

    const createModal = (content = "sin contenido", style = "") => {
      modal_container.innerHTML = `
        <div class="modal" id="modal">
          <div class="modal-content ${style}">
            ${content}
            <button class="modal-btn-closed" id="modal_btn_closed">x</button>
          </div>
         </div>`

      document.getElementById("modal").addEventListener("click", (e) => {
        console.log(e.target.id)
        if (e.target.id === "modal" || e.target.id === "modal_btn_closed") {
          modal_container.innerHTML = ""
        }
      })
    }
