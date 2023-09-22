import { Component } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-formulario-acceso',
  templateUrl: './formulario-acceso.component.html',
  styleUrls: ['./formulario-acceso.component.css']
})
export class FormularioAccesoComponent {
  public nombre: string
  public pass: string
  public enviar: boolean

  constructor(){
    this.nombre = ""
    this.pass = ""
    this.enviar = false
  }
correct(){
  this.enviar = true
}
}
