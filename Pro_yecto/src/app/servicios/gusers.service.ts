import { Injectable } from '@angular/core';
import { UsersBD } from '../Models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
   private alumnosAll: Array<UsersBD>

  constructor() {
    this.alumnosAll = [
      new UsersBD("1", "Manolo","Lama","./assets/media/fotommp.jpg","04/04/1984","manololama@gmail.com","555354565", "123456","el rey de la cama"),  
      new UsersBD("2", "Arturo","Maduro","./assets/media/fotommp.jpg","04/04/1984","arturitoe@gmail.com","555354565", "123456","se tiro de un muro"),  
      new UsersBD("1", "Paco","Jones","./assets/media/fotommp.jpg","04/04/1984","pacojones@gmail.com","555354565", "123456","pacojoneslosmios!!"), 
]


   }
   getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<UsersBD>{
    return this.alumnosAll
}
}
