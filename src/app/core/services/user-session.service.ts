import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { UserLogin } from '../interfaces/user-login';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  private loggedInUserSubject = new BehaviorSubject<UserLogin | null>(null);
  loggedInUser$ = this.loggedInUserSubject.asObservable();

  setLoggedInUser(user: UserLogin) {
    this.loggedInUserSubject.next(user);
  }

  getLoggedInUser(): UserLogin | null {
    return this.loggedInUserSubject.getValue();
  }
}
