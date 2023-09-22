import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from '@auth0/auth0-angular';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';



// Components
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { AccesoComponent } from './acceso/acceso.component';
import { RegistroComponent } from './registro/registro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearcursoComponent } from './crearcurso/crearcurso.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TareasComponent } from './tareas/tareas.component';
import {TableComponent } from './extras/table/table.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursoComponent,
    AccesoComponent,
    RegistroComponent,
    ContactoComponent,
    CrearcursoComponent,
    CrearCursoComponent,
    ListarCursoComponent,
    HeaderComponent,
    DashboardComponent,
    AlumnosComponent,
    TableComponent,
  
    
          
  ],
  imports: [
    MatRadioModule,
    MatInputModule,
    AlumnoComponent,
    ProfesoresComponent,
    ProfesorComponent,
    MatCardModule,
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TareasComponent,
    MatTableModule,
    ToastrModule.forRoot(),
    AuthModule.forRoot({
      domain: 'estadistica.auth0.com',
      clientId: 'knBYg5PAoX8zjj7uG9ShFEMQuqtAUGAQ'})
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
