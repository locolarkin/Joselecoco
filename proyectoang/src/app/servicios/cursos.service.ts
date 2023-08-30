import { Injectable } from '@angular/core';
import { cursosBD } from '../modelos/cursosBD';

@Injectable({
  providedIn: 'root'
})
export class CursosService{
  private cursosall: Array<cursosBD>

  constructor() {
    this.cursosall = [
      new cursosBD("Taller Manga","Aprenderemos a coser todo tipo de mangas, desde camisas hasta chalecos","150 hrs"),
      new cursosBD("Interiorismo y Exteriorismo", "Aprende a cuidarte por dentro y por fuera","2 hrs y media"),
      new cursosBD("Cocina para disfrutones","Todo tipo de platos y demas cuberteria","33 hrs")
    ]
   }

getTexto(){
  return "Texto desde un servicio"
}

getCursos(): Array<cursosBD>{
  return this.cursosall
}
}
