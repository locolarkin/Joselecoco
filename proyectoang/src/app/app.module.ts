import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormulariodeRegistroComponent } from './formulariode-registro/formulariode-registro.component';
import { FormulariodeConsultaComponent } from './formulariode-consulta/formulariode-consulta.component';
import { CrearcursoComponent } from './crearcurso/crearcurso.component';
import { TaskGComponent } from './task-g/task-g.component';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursoComponent,
    AlumnosComponent,
    AlumnoComponent,
    ProfesoresComponent,
    ProfesorComponent,
    FormularioAccesoComponent,
    FormulariodeRegistroComponent,
    FormulariodeConsultaComponent,
    CrearcursoComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrService,
    TaskGComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
