import { Injectable } from '@angular/core';
import { profesoresBD } from '../modelos/profesoresBD';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  private profesoresall: Array<profesoresBD>

  constructor() {
    this.profesoresall = [
      new profesoresBD("Manolo", "M. P.", 54,"manolo@gmail.com", "667936811","./assets/media/avatar1.jpg", true),
      new profesoresBD("Millan", "R. R.", 39,"millanrr@gmail.com", "123456789","./assets/media/avatar2.jpg", true), 
      new profesoresBD("Jorge", "D. M.", 19,"jorgedm@gmail.com", "123456789","./assets/media/avatar3.jpg", true)
    ]


   }
   getTexto(){
    return "Texto desde un servicio"
   }

   getProfesores(): Array<profesoresBD>{
    return this.profesoresall
   }
}
