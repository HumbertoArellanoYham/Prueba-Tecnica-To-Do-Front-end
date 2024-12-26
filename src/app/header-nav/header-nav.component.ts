import { Component } from '@angular/core';

// Material Design imports
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import { Router } from '@angular/router'; 

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent {
  constructor(private router: Router){}

  agregarTarea(){
    this.router.navigate(['/crearTarea'])
  }

  listaDeTareas(){
    this.router.navigate(['/administrarTareas'])
  }

  panelPrincipal(){
    this.router.navigate(['/mainView'])
  }

}
