import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { from, Observable, map, of } from 'rxjs';

// Interfaces
import { Tareas } from '../interfaces/tareas'; 

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  urlBase: string = 'http://localhost:8080/task';

  constructor(private httpClient: HttpClient) { }

  // Peticiones al servidor back end 
  public todasLasTareasPendientes(): Observable<Tareas[]> {
    return this.httpClient.get<Tareas[]>(`${this.urlBase}/all-task`);
  } 

  public encontrarTareaPorId(id: number): Observable<Tareas> {
    return this.httpClient.get<Tareas>(`${this.urlBase}/found-task-id/${id}`);
  }

  public encontrarTareaPorNombre(name: string): Observable<Tareas> {
    return this.httpClient.get<Tareas>(`${this.urlBase}/found-task-name/${name}`);
  }

  public guardarTarea(tarea: Tareas): Observable<Tareas> {
    return this.httpClient.post<Tareas>(`${this.urlBase}/save-task`, tarea);
  }

  public actualizarTarea(tareaUpdate: Tareas): Observable<Tareas> {
    return this.httpClient.patch<Tareas>(`${this.urlBase}/patch-task`, tareaUpdate);
  }

  public eliminarTaskPorId(id: number): void{
    this.httpClient.delete(`${this.urlBase}/delete-task-id/${id}`);
  }

  public eliminarTaskPorName(name: string): Observable<any>{
    return this.httpClient.delete(`${this.urlBase}/delete-task-name/${name}`);
  }
}
