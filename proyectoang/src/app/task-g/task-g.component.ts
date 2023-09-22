import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GTask } from '../modelos/GTask';
import { GtaskService } from '../servicios/Task.service';


@Component({
  selector: 'app-task-g',
  templateUrl: './task-g.component.html',
  styleUrls: ['./task-g.component.css']
})
export class TaskGComponent{
  taskForm: FormGroup;
  titulo = 'Crear tarea';
    id: string | null;
    constructor(private fb: FormBuilder,
                private router: Router,
                private toastr: ToastrService,
                private _taskService: GtaskService,
                private aRouter: ActivatedRoute) { 
      this.taskForm = this.fb.group({
        UserName: ['', Validators.required],
        TaskName: ['', Validators.required],
        TaskDescript: ['', Validators.required],
        Award: ['', Validators.required],
        State: ['', Validators.required],
        
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }
  
    ngOnInit(): void {
      this.esEditar();
    }
  
    agregarTarea() {
  
      const TAREA: GTask = {
        IdTask: this.taskForm.get('IdTask')?.value,
        IdUser: this.taskForm.get('IdUser')?.value,
        UserName: this.taskForm.get('UserName')?.value,
        TaskName: this.taskForm.get('TaskName')?.value,
        TaskDescript: this.taskForm.get(' TaskDescript')?.value,
        Award: this.taskForm.get('Award')?.value,
        State: this.taskForm.get('State')?.value,
      }
  
      if(this.id !== null){
        // Editamos Curso
        this._taskService.editarTarea(this.id, TAREA).subscribe(data =>{
          this.toastr.info('La tarea fue actualizada con exito!', 'Tarea Actualizada!');
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.taskForm.reset();
        })
      } else{
        // Agregamos Curso
        console.log(TAREA);
          this._taskService.guardarTarea(TAREA).subscribe(data => {
          this.toastr.success('La tarea fue registrado con exito!', 'Tarea Registrada!');
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.taskForm.reset();
        })
      }
    }
    
    esEditar() {
      if(this.id !== null) {
        this.titulo = 'Editar Tarea';
        this._taskService.obtenerTarea(this.id).subscribe(data => {
          this.taskForm.setValue({
            TaskName: data. TaskName,
            TaskDescript: data.TaskDescript,
            Award: data.Award,
          })
        })
      }
    }
  
  }
  