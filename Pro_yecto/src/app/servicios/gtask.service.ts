import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GTask } from '../Models/TaskBD';

@Injectable({
  providedIn: 'root'
})
export class GTaskService {

  url= 'http://localhost:4200/api/Tareas/'

  constructor(private http: HttpClient) { }

  getTask(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarTask(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarTask(task: GTask): Observable<any> {
    return this.http.post(this.url, task);
  }

  obtenerTask(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarTask(id: string, task: GTask): Observable<any>{
    return this.http.put(this.url + id, task)

  }
}
