import { Component } from '@angular/core';
import { profesoresBD } from '../modelos/profesoresBD';
import { ProfesoresService } from '../servicios/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
  providers: [ProfesoresService]
})
export class ProfesoresComponent {
public profesoresall: Array<profesoresBD>

  constructor(private _profesoresService: ProfesoresService){
    this.profesoresall = new Array<profesoresBD>
  }
ngOnInit(){
  this.profesoresall = this._profesoresService.getProfesores();
}

}
