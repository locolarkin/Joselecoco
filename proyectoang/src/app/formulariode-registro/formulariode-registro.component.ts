import { Component } from '@angular/core';

@Component({
  selector: 'app-formulariode-registro',
  templateUrl: './formulariode-registro.component.html',
  styleUrls: ['./formulariode-registro.component.css']
})
export class FormulariodeRegistroComponent {
  public usuario: string
  public email: string
  public nacimiento: string
  public contrasena: string
  public contrasenaB: string

  constructor(){
    this.email = ""
    this.nacimiento = ""
    this.usuario = ""
    this.contrasena = ""
    this.contrasenaB = ""
  }
}
