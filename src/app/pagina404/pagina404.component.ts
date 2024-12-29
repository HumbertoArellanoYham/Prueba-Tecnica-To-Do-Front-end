import { Component} from '@angular/core';
import { Router } from '@angular/router';

// Material design  
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-pagina404',
  standalone: true,
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './pagina404.component.html',
  styleUrl: './pagina404.component.css'
})
export class Pagina404Component {
  constructor(private router: Router){}

  goHome(){
    this.router.navigate(['/mainView']);
  }
}
