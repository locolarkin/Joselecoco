import { Component } from '@angular/core';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    public rango: boolean
    public nombre: string
    public foto: string
    public edad: string
    public email: string
    public contrasena: string
    public contrasenaB: string
  
    constructor(){
      this.rango = false
      this.nombre = ""
      this.foto = ""
      this.edad = ""
      this.email = ""
      this.contrasena = ""
      this.contrasenaB = ""
    }
  }



