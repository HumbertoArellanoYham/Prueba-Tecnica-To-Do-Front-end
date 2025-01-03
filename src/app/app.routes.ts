import { Routes } from '@angular/router';

// Components 
import { UserComponent } from './user/user.component';
import { CrearTareaComponent } from './user/crear-tarea/crear-tarea.component';
import { administrartareacomponent } from './user/administrar-tarea/administrar-tarea.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import {LoginComponent} from './login/login.component';
import {RegistrarComponent} from './login/registrar/registrar.component';



export const routes: Routes = [
    // Tareas 
    
    { path: 'mainView', component: UserComponent },
    { path: 'crearTarea', component: CrearTareaComponent },
    { path: 'administrarTareas', component: administrartareacomponent },

    { path: '', pathMatch: 'full', redirectTo: 'login' },

    // Login
    { path: 'login', component: LoginComponent },
    { path: 'registrar', component: RegistrarComponent },

    // Ruta no encontrada
    { path: 'paginaNotFound', component: Pagina404Component },
    { path: '**', component: Pagina404Component }
];
