
export var profesorBase = {
    rango: "2",
    nombre: "Manuel",
    foto: "./assets/media/fotommp.jpg",
    edad: 54,
    correo: "manuelmacpe@gmail.com",
    contrasena: "123456"
    
}

export class UsersBD {

    constructor(
        public rango: string,
        public nombre: string,
        public foto: string,
        public edad: number,
        public correo: string,
        public contrasena: string, 
    ){}
}