import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
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
import { MatDialogModule, MatDialog } from '@angular/material/dialog';

// Interfaces
import {Tareas} from '../../core/interfaces/tareas';

// Services 
import {TasksService} from '../../core/services/tasks.service';

// Modal alert
import Swal from 'sweetalert2';

// Componentes
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';


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
    MatDialogModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})

export class CrearTareaComponent {
  private formBuilder = inject(FormBuilder);

  // Botones para habilitar
  eliminarBoton = true;
  otraTareaBoton = true;
  actualizarBoton = true;
  guardarBoton = true;

  tareaPendienteFound! : Tareas;

  nuevaTarea = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    pendiente: [{value: false, disabled: false}],
    descripcion: ['', [Validators.required]],  
    fechainicio: [{value: '', disabled: false}, [Validators.required]],
    fechafin: [{value: '', disabled: false}, [Validators.required]]
  });

  constructor(private taskService: TasksService, private dialog: MatDialog){
    this.deshabilitarCampos();
  }

  verificarTarea(event: KeyboardEvent): void{
    const tareaFound = this.nuevaTarea.get('nombre')?.value ?? '';

    if(event.key == 'Enter' && this.nuevaTarea.get('nombre')?.valid){
      console.log('Presionaste la tecla enter');

      this.taskService.encontrarTareaPorNombre(tareaFound).subscribe((item) => {
        this.tareaPendienteFound = item;
        console.log('Se encontro la tarea?: ' + this.tareaPendienteFound);

        if(item == null){
          this.habilitarCamposParaAgregarTarea();
        }else {
          this.habilitarCamposParaActualizarTarea();

          //Llenar el formulario
          this.nuevaTarea.patchValue({
            'nombre': item.nombre,
            'pendiente': item.tareaCompletada,
            'descripcion': item.description,
            'fechainicio': item.fechaInicio,
            'fechafin': item.fechaFin
          });
        }
      })
    }
  }

  agregarNuevaTarea(){
    if(this.nuevaTarea.valid){
      const nuevaTareaPendiente: Tareas = {
        nombre: this.nuevaTarea.get('nombre')?.value || '', 
        description: this.nuevaTarea.get('descripcion')?.value || '', 
        tareaCompletada: this.nuevaTarea.get('pendiente')?.value || false, 
        fechaInicio: this.nuevaTarea.get('fechainicio')?.value || '', 
        fechaFin: this.nuevaTarea.get('fechafin')?.value || '' 
      }

      this.taskService.guardarTarea(nuevaTareaPendiente)
        .subscribe({
          next: (item) => {

          Swal.fire({
            title: 'Excelente!',
            text: 'Se agrego nueva tarea pendiente',
            icon: 'success',
            confirmButtonText: 'Ok'
          });

          console.log("Se agrego correctamente", item);
          },
          error: (err) => {
            Swal.fire({
              title: 'Error!',
              text: 'No se agrego la tarea',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
        });

      this.nuevaTarea.reset();
      this.crearOtraTarea();

    } else {
      Swal.fire({
        title: 'Advertencia!',
        text: 'Faltan que ingreses campos, intenta de nuevo',
        icon: 'error',
        confirmButtonText: 'Ok'
      });

    }
  }


  eliminarLaTarea(){
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      width: '400px',
      data: {
        title: 'Confirmación',
        message: '¿Estás seguro de que deseas eliminar esta tarea pendiente?',
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.eliminarTaskPorName(this.nuevaTarea.get('nombre')?.value || '')
        .subscribe({
          next: (item) => {
            console.log(item, 'Tarea pendiente eliminada');
          },
          error: (err) => {
            Swal.fire({
              title: 'Error!',
              text: 'No se pudo eliminar la tarea',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
        });


        this.crearOtraTarea();
        this.nuevaTarea.reset();

      } else {
        console.log('Eliminación cancelada');
      }
    });
  }

  modificarTarea(){
    if(this.nuevaTarea.valid){
      this.habilitarCamposParaActualizarTarea();

      const nuevaTareaPendiente: Tareas = {
        id_tarea: this.tareaPendienteFound.id_tarea,
        nombre: this.nuevaTarea.get('nombre')?.value || '', 
        description: this.nuevaTarea.get('descripcion')?.value || '', 
        tareaCompletada: this.nuevaTarea.get('pendiente')?.value || false, 
        fechaInicio: this.nuevaTarea.get('fechainicio')?.value || '', 
        fechaFin: this.nuevaTarea.get('fechafin')?.value || '' 
      }

      this.taskService.actualizarTarea(nuevaTareaPendiente)
        .subscribe({
          next: (item) => {
            console.log(item, 'Tarea pendiente actualizada');

            Swal.fire({
              title: 'Se actualizo correctamente!',
              icon: 'success',
              confirmButtonText: 'Ok'
            });

          },
          error: (err) => {
            console.error('Error al actualizar la tarea:', err);

            Swal.fire({
              title: 'Error!',
              text: 'No se pudo actualizar la tarea',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
        });

      this.nuevaTarea.reset();
      this.crearOtraTarea();

    } 
  }

  crearOtraTarea(){
    this.nuevaTarea.reset();
    this.deshabilitarCampos();

    this.guardarBoton = true;
    this.otraTareaBoton = true;
    this.actualizarBoton = true;
    this.eliminarBoton = true;
  }



  // Habilitar campos dependiendo la operacion a realizar
  deshabilitarCampos(){
    this.nuevaTarea.get('pendiente')?.disable();
    this.nuevaTarea.get('descripcion')?.disable();
    this.nuevaTarea.get('fechainicio')?.disable();
    this.nuevaTarea.get('fechafin')?.disable();
  }

  habilitarCamposParaAgregarTarea(){
    this.nuevaTarea.get('pendiente')?.enable();
    this.nuevaTarea.get('descripcion')?.enable();
    this.nuevaTarea.get('fechainicio')?.enable();
    this.nuevaTarea.get('fechafin')?.enable();

    this.guardarBoton = false;
    this.otraTareaBoton = false;
  }

  habilitarCamposParaActualizarTarea(){
    this.nuevaTarea.get('pendiente')?.enable();
    this.nuevaTarea.get('descripcion')?.enable();
    this.nuevaTarea.get('fechainicio')?.enable();
    this.nuevaTarea.get('fechafin')?.enable();

    this.eliminarBoton = false;
    this.actualizarBoton = false;
    this.otraTareaBoton = false;
  }
}
