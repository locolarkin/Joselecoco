import { Injectable } from '@angular/core';
import { UsersBD } from '../Models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
   private alumnosAll: Array<UsersBD>

  constructor() {
    this.alumnosAll = [
      new UsersBD("1","Manuel", "./assets/media/avatar1.jpg", 54,"manuelmacpe@gmail.com", "123456"), 
      new UsersBD("2","Miguel", "./assets/media/avatar2.jpg", 39,"miguelrr@gmail.com", "123456"), 
      new UsersBD("1","Javier", "./assets/media/avatar3.jpg", 19,"javierdm@gmail.com", "123456"),
]


   }
   getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<UsersBD>{
    return this.alumnosAll
}
}
