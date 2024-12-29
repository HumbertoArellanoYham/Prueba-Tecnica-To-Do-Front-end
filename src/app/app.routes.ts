import { Routes } from '@angular/router';

// Components 
import { UserComponent } from './user/user.component';
import { CrearTareaComponent } from './user/crear-tarea/crear-tarea.component';
import { administrartareacomponent } from './user/administrar-tarea/administrar-tarea.component';
import { Pagina404Component } from './pagina404/pagina404.component';

export const routes: Routes = [
    { path: 'mainView', component: UserComponent },
    { path: 'crearTarea', component: CrearTareaComponent },
    { path: 'administrarTareas', component: administrartareacomponent },

    { path: '', pathMatch: 'full', redirectTo: 'mainView' },

    // Ruta no encontrada
    { path: 'paginaNotFound', component: Pagina404Component },
    { path: '**', component: Pagina404Component }
];
