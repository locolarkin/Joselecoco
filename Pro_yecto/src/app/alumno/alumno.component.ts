import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { UsersBD } from '../Models/UsersBD';
import {MatCardModule} from '@angular/material/card';
import { AlumnosService } from '../servicios/gusers.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})

export class AlumnoComponent {
  public alumnosAll: Array<UsersBD>

  constructor(private _alumnosService: AlumnosService) {
    this.alumnosAll= new Array<UsersBD>
  }

  ngOnInit(): void {
    this.alumnosAll = this._alumnosService.getAlumnos();
  }

}
