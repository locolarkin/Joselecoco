var alumno = {
    nombre: "Juan Lopez",
    correo: "juanlopez@gmail.com",
    telefono: "555 555 555"
}
// var alumnodos = {
//     nombre: "Jose Garcia",
//     correo: "josegarcia@gmail.com",
//     telefono: "555 777 777"
// }

// alumno.nombre = "Juan Lopez Lopez";

// var alumnos = [alumno, alumnodos];
// console.log(alumnos);

// var total_alumnos = document.querySelector("#totalalumnos");

// var indice;
// for(indice in alumnos){
//     var p=document.createElement("p");
//     p.append(alumnos[indice].nombre + "------");
//     p.append(alumnos[indice].correo + "------");
//     p.append(alumnos[indice].telefono + "------");
//    total_alumnos.append(p);
// }

// comprobacion de la disponibilidad del localStorage

if(typeof(Storage) !== 'undefined'){
    console.log("Disponible");
}else{
    console.log("No disponible");
}

// guardar datos

localStorage.setItem("Listado",
"Listado de Alumnos");

// recuperar datos
localStorage.getItem("Listado");

// Guardar objetos JSON
localStorage.getItem("alumno", JSON.stringify(alumno));

var alumnojs = JSON.parse(localStorage.getItem("alumno"));

document.querySelector("#totalalumnos").append
(alumnojs.nombre + "------" +alumnojs.correo+ alumno.telefono);

localStorage.removeItem("Listado");

localStorage.clear();

