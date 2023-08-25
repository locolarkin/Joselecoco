import { Component } from '@angular/core';
import{ alumnosBD } from 'src/app/modelos/alumnosBD'

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {
  public alumnosAll: Array<alumnosBD>

  constructor(){
    this.alumnosAll=[
      new alumnosBD('Paco','Paquez Packinson',33,'Paquito@gmail.com','555324352','https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000',true)
    ]
  }

}
