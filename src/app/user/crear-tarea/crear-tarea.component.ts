import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Forms imports 
import {FormControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

// Material Design imports 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';

// Interfaces
import {Tareas} from '../../core/interfaces/tareas';

// Services 
import {TasksService} from '../../core/services/tasks.service';

// Modal alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-tarea',
  standalone: true,
  imports: [
    MatGridListModule,
    MatCardModule,
    ReactiveFormsModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})

export class CrearTareaComponent {
  private formBuilder = inject(FormBuilder);

  nuevaTarea = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    pendiente: [{value: false, disabled: false}],
    descripcion: ['', [Validators.required]],  
    fechainicio: [{value: '', disabled: false}, [Validators.required]],
    fechafin: [{value: '', disabled: false}, [Validators.required]]
  });

  constructor(private taskService: TasksService){

  }

  agregarNuevaTarea(){
    if(this.nuevaTarea.valid){
      const nuevaTareaPendiente: Tareas = {
        nombre: this.nuevaTarea.get('nombre')?.value || '', 
        description: this.nuevaTarea.get('descripcion')?.value || '', 
        tareaCompletada: this.nuevaTarea.get('pendiente')?.value || true, 
        fechaInicio: this.nuevaTarea.get('fechainicio')?.value || '', 
        fechaFin: this.nuevaTarea.get('fechafin')?.value || '' 
      }

      this.taskService.guardarTarea(nuevaTareaPendiente).subscribe((task) => {
        console.log(task);
      });

      this.nuevaTarea.reset();

      Swal.fire({
        title: 'Excelente!',
        text: 'Se agrego nueva tarea pendiente',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
    } else {
      Swal.fire({
        title: 'Advertencia!',
        text: 'Faltan que ingreses campos, intenta de nuevo',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }

}
