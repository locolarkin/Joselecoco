var contenedor=document.getElementById
("contenedor");

contenedor.innerHTML="contenido en el contenedor";
contenedor.style.background = "blue";
contenedor.style.padding= "20px";
contenedor.style.color= "white";

contenedor.className = "contenedor";

function cambiarColor(){
    contenedor.style.background ="green";
}

// var contenedor = document.querySelector("#contenedor"); 

var elementos = document.getElementsByTagName
('div');

var contenido_tres = elementos[2];
contenido_tres.innerHTML = "Contenido Añadido";
contenido_tres.style.background = "yellow";
contenido_tres.style.color = "black";

var valor;
for(valor in elementos){

if(typeof elementos[valor].textcontent == 
    'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode
        (elementos[valor]).textContent;
        parrafo.append(texto);
        document.querySelector("#seccion_una").append(parrafo);
    }
}

var divcaja = document.getElementsByClassName
('caja');
var div;
for(div in divcaja){
    if(divcaja[div].className == "caja"){
        divcaja[div].style.color = "blue";
    }
}

var solouno = document.querySelectorAll('div');
console.log(varios);