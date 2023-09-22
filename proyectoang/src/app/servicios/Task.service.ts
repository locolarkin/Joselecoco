import { Injectable } from '@angular/core';
import { GTask } from '../modelos/GTask';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GtaskService{
 url= 'http://localhost:3700/api/cursos/'
  constructor(private http: HttpClient) { }

getTarea(): Observable<any> {
  return this.http.get(this.url)
}

eliminarTarea(id:string): Observable<any> { 
  return this.http.delete(this.url + id);
}
guardarTarea(tarea: GTask): Observable<any> {
  return this.http.post(this.url, tarea);
}
obtenerTarea(id:string): Observable<any> {
  return this.http.get(this.url + id);
}
editarTarea(id:string, tarea: GTask): Observable<any>{
  return this.http.put(this.url + id, tarea)
}
}
