import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-acceso',
  templateUrl: './formulario-acceso.component.html',
  styleUrls: ['./formulario-acceso.component.css']
})
export class FormularioAccesoComponent {
  public usuario: string
  public contrasena: string
  public enviar: boolean

  constructor(){
    this.usuario = ""
    this.contrasena = ""
    this.enviar = false
  }
correct(){
  this.enviar = true
}
}
