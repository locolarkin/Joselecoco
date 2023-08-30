import { Component } from '@angular/core';
import{ alumnosBD } from 'src/app/modelos/alumnosBD'
import { AlumnosService } from '../servicios/alumnos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  providers: [AlumnosService]
})

export class AlumnoComponent {
  public alumnosAll: Array<alumnosBD>

  constructor(private _alumnosService: AlumnosService) {
    this.alumnosAll= new Array<alumnosBD>
  }

  ngOnInit(): void {
    this.alumnosAll = this._alumnosService.getAlumnos();
  }

}
