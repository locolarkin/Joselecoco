import { Injectable } from "@angular/core";
import { UsersBD } from '../Models/UsersBD'


@Injectable({
    providedIn: 'root'
})
export class CursosService{
    private alumnosall: Array<UsersBD>

    constructor(){
        this.alumnosall = [
                new UsersBD( "1","Manuel","./assets/media/fotommp.jpg", 33,"manuelmacpe@gmail.com", "123456", ),
                new UsersBD( "2","Manu","./assets/media/fotommp.jpg", 22,"manuelmacpe@gmail.com", "123456", ),
                new UsersBD( "1","Manolo","./assets/media/fotommp.jpg", 44,"manuelmacpe@gmail.com", "123456", ),        
        ]
}

getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<UsersBD>{
    return this.alumnosall
}
}