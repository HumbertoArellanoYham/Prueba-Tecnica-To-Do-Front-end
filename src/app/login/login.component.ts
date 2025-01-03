import { Component, ChangeDetectionStrategy, signal, inject, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, RouterLink } from '@angular/router';

// Forms imports 
import {FormControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

// Material design  
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

// Interfaces
import {UserLogin} from '../core/interfaces/user-login';

// Services 
import {UserLoginService} from '../core/services/user-login.service';
import { UserSessionService } from '../core/services/user-session.service';

// Modal alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCheckboxModule, 
    ReactiveFormsModule,
    CommonModule, 
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private formBuilder = inject(FormBuilder);

  userLoginFound!: UserLogin;

  loginForm = this.formBuilder.group({
    usuario: ['', [Validators.required]],
    password: ['', [Validators.required]],
    checkTerminos: [false],
  }); 

  constructor(
    private userLoginService: UserLoginService,
    private userSessionService: UserSessionService,
    private router: Router
  ){}

  ingresar(){
    if(this.loginForm.valid){

      const confirmarLogin: UserLogin = {
        usuario: this.loginForm.get('usuario')?.value || '', 
        password: this.loginForm.get('password')?.value || ''
      };


      this.userLoginService.seEncuentraRegistrado(confirmarLogin).subscribe({
        next: (item) => {
          Swal.fire({
            title: 'Excelente!',
            text: 'Inicio de sesión exitosa',
            icon: 'success',
            confirmButtonText: 'Ok'
          });

          this.userLoginFound = confirmarLogin;

          console.log("Usuario logueado correctamente", item);

          // Reset del formulario y controles
          this.loginForm.reset();
          this.loginForm.markAsPristine();
          this.loginForm.markAsUntouched();

          // Enviar el usuario registrado
          this.userSessionService.setLoggedInUser(this.userLoginFound);
          console.log('Usuario emitido', this.userLoginFound);
          
          this.router.navigate(['/mainView']);
        }, 
          error: (err) => {
            Swal.fire({
              title: 'Error!',
              text: 'Usuario o contraseña incorrectos',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
      });
    } else {
      Swal.fire({
        title: 'Advertencia!',
        text: 'Ingresa todos los campos',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
