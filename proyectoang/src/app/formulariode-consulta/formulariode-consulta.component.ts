import { Component } from '@angular/core';

@Component({
  selector: 'app-formulariode-consulta',
  templateUrl: './formulariode-consulta.component.html',
  styleUrls: ['./formulariode-consulta.component.css']
})
export class FormulariodeConsultaComponent {
  public usuario: string
  public email: string
  public topic: string
  public mensaje: string

  constructor(){
    this.usuario = ""
    this.email = ""
    this.topic = ""
    this.mensaje = ""
  }
}
