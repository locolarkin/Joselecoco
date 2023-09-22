import { Component } from '@angular/core';

@Component({
  selector: 'app-formulariode-registro',
  templateUrl: './formulariode-registro.component.html',
  styleUrls: ['./formulariode-registro.component.css']
})
export class FormulariodeRegistroComponent {
  public rank: string
  public nombre: string
  public apellidos: string
  public foto: string
  public email: string
  public birthdate: string
  public phone: string
  public pass: string

  constructor(){
    this.rank = ""
    this.email = ""
    this.birthdate = ""
    this.nombre = ""
    this.apellidos = ""
    this.foto = ""
    this.phone = ""
    this.pass = ""
  }
}
