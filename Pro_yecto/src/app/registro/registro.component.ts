import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    public rank: string
    public nombre: string
    public apellidos: string
    public foto: string
    public birthdate: string
    public email: string
    public phone: string
    public pass: string
  
    constructor(){
      this.rank = ""
      this.nombre = ""
      this.apellidos = ""
      this.foto = ""
      this.birthdate = ""
      this.email = ""
      this.phone = ""
      this.pass = ""
    }
  }



