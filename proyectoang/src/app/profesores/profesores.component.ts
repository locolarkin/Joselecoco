import { Component } from '@angular/core';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent {
  public Profesor1 : string
  public Profesor2 : string
  public Profesor3 : string

  constructor(){
    this.Profesor1 = "Paco el Flaco"
    this.Profesor2 = "Florinda Chico"
    this.Profesor3 = "Lorenzo Lamas"
  }
}
