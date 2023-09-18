import { Injectable } from '@angular/core';
import { GTask } from '../modelos/GTask';

@Injectable({
  providedIn: 'root'
})
export class GtaskService{
  private taskall: Array<GTask>

  constructor() {
    this.taskall = [
      new GTask("1234","1234","paco","movida","hacer movida rapido y bien",555,"y tal"),]
   }

getTexto(){
  return "Texto desde un servicio"
}

getCursos(): Array<GTask>{
  return this.taskall
}
}
