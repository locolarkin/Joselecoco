import { Injectable } from "@angular/core";
import { UsersBD } from '../Models/UsersBD'


@Injectable({
    providedIn: 'root'
})
export class CursosService{
    private alumnosall: Array<UsersBD>

    constructor(){
        this.alumnosall = [
                new UsersBD("1", "Paco","Paquez","./assets/media/fotommp.jpg","01/05/1994","manuelmacpe@gmail.com","555354565", "123456","loren ipsum rules"), 
                new UsersBD("1", "Servando","Servandez","./assets/media/fotommp.jpg","14/09/1988","manuelmacpe@gmail.com","555354565", "123456","tal y cual"), 
                new UsersBD("2", "Manolo","Manolez","./assets/media/fotommp.jpg","04/04/1984","manuelmacpe@gmail.com","555354565", "123456","esto ya estaria"),        
        ]
}

getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<UsersBD>{
    return this.alumnosall
}
}