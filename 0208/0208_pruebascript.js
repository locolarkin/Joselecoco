// function saveALocal(llave, vSave){
//     localStorage.setItem(llave, JSON.stringify(vSave))
// }


// function gALocal(llave){
//     const datos = JSON.parse(localStorage.getItem(llave));
//     return datos;
// }

// let alumnos = gALocal('alumnos') || [];

function formulario(){

    var alumno= {
        nombre: document.querySelector('#nombre').value,
        email: document.querySelector('#email').value,
        asunto: document.querySelector('#asunto').value,
        mensaje: document.querySelector('#mensaje').value
    }
    var alumnos=[];
    alumnos.push(alumno);
    // saveALocal("alumnos", alumnos);
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
}