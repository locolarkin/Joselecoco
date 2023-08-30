import { Component } from '@angular/core';
import { alumnosBD } from 'src/app/modelos/alumnosBD';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  public alumnosall: Array<alumnosBD>

  constructor(){
    this.alumnosall = [
      new alumnosBD("Manuel", "M. P.", 54,"manuelmacpe@gmail.com", "667936811","./assets/media/fotommp.jpg", true, 6), 
      new alumnosBD("Miguel", "R. R.", 39,"miguelrr@gmail.com", "123456789","./assets/media/fotommp.jpg", true, 8), 
      new alumnosBD("Javier", "D. M.", 19,"javierdm@gmail.com", "123456789","./assets/media/fotommp.jpg", true, 8)
]
}
}
