import { Component, OnInit } from '@angular/core';
import { UsersBD } from '../Models/alumnos';
import { CursosService } from '../servicios/cursos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  providers: [CursosService]
})
export class AlumnosComponent implements OnInit {
  public alumnosall: Array<UsersBD>;
  public correosEle: string[] = [];
  public notaAlumno: number = 5;
  public Nota: number = 0;
  public registrado: boolean = false;

  constructor(private _cursosService: CursosService) {
    this.alumnosall = new Array<UsersBD>()
  }

  ngOnInit(): void {
    this.alumnosall = this._cursosService.getAlumnos();
    this.getcorreosEle();
  }

  getcorreosEle() {
    this.alumnosall.forEach((alumno) => {
      this.correosEle.push(alumno.correo);
    });
    console.log(this.correosEle);
  }

  setRegistrado() {
    this.registrado = true;
  }

  unsetRegistrado() {
    this.registrado = false;
  }
}
