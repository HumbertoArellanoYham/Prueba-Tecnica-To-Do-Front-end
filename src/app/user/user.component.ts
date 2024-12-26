import { Component, ChangeDetectionStrategy } from '@angular/core';

// Material Design imports
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private router: Router){}

  nuevaTarea(){
    this.router.navigate(['/crearTarea']);
  }

  administrarTareas(){
    this.router.navigate(['/administrarTareas']);
  }

}
