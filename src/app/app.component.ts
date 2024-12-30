import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink} from '@angular/router';

// Components 
import { HeaderNavComponent } from './header-nav/header-nav.component';
import {LoginComponent} from './login/login.component';

// Imports design
import { NgModel } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 

//Interfaces 
import { UserLogin } from './core/interfaces/user-login';

//Services
import {UserSessionService } from './core/services/user-session.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // HeaderNavComponent,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    RouterLink,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Aplicación ToDo';
  side = false;

  loggedInUser?: UserLogin;

  constructor(private userSessionService: UserSessionService) {}

  ngOnInit() {
    this.userSessionService.loggedInUser$.subscribe((user) => {
      this.loggedInUser = user || undefined;
    });
  }
}
