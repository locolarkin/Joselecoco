import { Component } from '@angular/core';
import{ cursosBD } from 'src/app/modelos/cursosBD'
import { CursosService } from '../servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})

export class CursosComponent {

  public cursosAll: Array<cursosBD>
 
  constructor(private _CursosService: CursosService){

    this.cursosAll = [
      new cursosBD('ILUSTRACIÓN','con un 6 y un 4 haremos nuestro retrato','(150 horas)'),
      new cursosBD('NEGOCIACIÓN','El arte de como partirle la cara a un gilipollas','(5 horas)'),
      new cursosBD('MAMPORREO','Es mejor que no lo sepas, tu vente que te va a gustar','(69 horas)'),
    ]
  }
  ngOnInit(){
    this.cursosAll = this._CursosService.getCursos();
  }


}
