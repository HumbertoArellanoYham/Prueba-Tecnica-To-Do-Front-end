import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components 
import { HeaderNavComponent } from './header-nav/header-nav.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PruebaTecnicaToDo';
}
