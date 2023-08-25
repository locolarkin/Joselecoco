import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  public Alumno1: string
  public Alumno2: string
  public Alumno3: string

  constructor(){
    this.Alumno1 = "Paco Paquez Packinson"
    this.Alumno2 = "Ramon Rodriguez Rivera"
    this.Alumno3 = "Maria Martinez Mora"
}
}
