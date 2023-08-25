import { Component } from '@angular/core';
import{ cursoBD } from 'src/app/modelos/cursoBD'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent {
  public cursoAll: Array<cursoBD>


  constructor(){
   this.cursoAll=[
    new cursoBD('NEGOCIACIÓN:','Como partirle la cara a un gilipollas',
    '(5 Hrs)','1.Introduccion. 2.Recursos de negociación: del grito a la bofetada. 3.Gigantes y Cabezudos')
   ]
  }

}
