import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { from, Observable, map, of } from 'rxjs';

// Interfaces
import { UserLogin } from '../interfaces/user-login'; 

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  urlBaseLogin: String = 'http://localhost:8080/login';

  constructor(private httpClient: HttpClient) { 

  }

  public crearUsuario(usuario: UserLogin): Observable<UserLogin> {
    return this.httpClient.post<UserLogin>(`${this.urlBaseLogin}/create-user`, usuario);
  }
  
  public seEncuentraRegistrado(usuario: UserLogin): Observable<boolean>{
    return this.httpClient.post<boolean>(`${this.urlBaseLogin}/logged-in`, usuario);
  }
}
