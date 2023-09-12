import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})

export class AlumnoComponent {

}
