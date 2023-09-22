
export var profesorBase = {
    rango: "2",
    nombre: "Manuel",
    apellidos: "Manuelez",
    foto: "./assets/media/fotommp.jpg",
    birthdate: "21/01/71",
    email: "manuelmacpe@gmail.com",
    phone: "555329255",
    pass: "123456",
    notes: "I dont know because yo no estaba aqui ni eso"
    
}

export class UsersBD {

    constructor(
        public rank: string,
        public nombre: string,
        public apellidos: string,
        public foto: string,
        public birthdate: string,
        public email: string,
        public phone: string,
        public pass: string, 
        public notes: string,
    ){}
}