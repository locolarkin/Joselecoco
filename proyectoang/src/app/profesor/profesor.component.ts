import { Component } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent {

  public NombreProfesor: string
  public Nombre: string
  public Apellidos: string
  public Mail: string
  public Rango: string

  constructor(){
    this.NombreProfesor = "Darkmaster"
    this.Nombre = "Manolo"
    this.Apellidos = "Rios Llanos"
    this.Mail = "morocha@hotmail.com"
    this.Rango = "Platino"
  }
}
