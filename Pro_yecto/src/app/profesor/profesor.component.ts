import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class ProfesorComponent {

}
