import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UsersBD } from '../Models/alumnos';
import { AlumnosService } from '../servicios/gusers.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class ProfesorComponent {
  public alumnosAll: Array<UsersBD>

  constructor(private _alumnosService: AlumnosService) {
    this.alumnosAll= new Array<UsersBD>
  }

  ngOnInit(): void {
    this.alumnosAll = this._alumnosService.getAlumnos();
  }


}
