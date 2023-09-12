import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})

export class ProfesoresComponent {

}
