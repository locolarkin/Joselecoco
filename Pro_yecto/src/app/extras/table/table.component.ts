import {Component} from '@angular/core';

export interface AlumnoList {
  name: string;
  position: number;
  score: number;
  lvl: number;
}

const ALUMNO_DATA: AlumnoList[] = [
  {position: 1, name: 'Hydrogen', score: 1.0079, lvl: 99},
  {position: 2, name: 'Helium', score: 4.0026, lvl: 65},
  {position: 3, name: 'Lithium', score: 6.941, lvl: 50},
  {position: 4, name: 'Beryllium', score: 9.0122, lvl: 45},
  {position: 5, name: 'Boron', score: 10.811, lvl: 40},
  {position: 6, name: 'Carbon', score: 12.0107, lvl: 36},
  {position: 7, name: 'Nitrogen', score: 14.0067, lvl: 32},
  {position: 8, name: 'Oxygen', score: 15.9994, lvl: 30},
  {position: 9, name: 'Fluorine', score: 18.9984, lvl: 21},
  {position: 10, name: 'Neon', score: 20.1797, lvl: 20},
];

/**
 * @title Styling columns using their auto-generated column names
 */
@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-score', 'demo-lvl'];
  dataSource = ALUMNO_DATA;
}
