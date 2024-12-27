import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';

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
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';

// Interfaces
import {Tareas} from '../../core/interfaces/tareas';

// Services 
import {TasksService} from '../../core/services/tasks.service';

// Modal alert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrar-tarea',
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
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    CommonModule,
    MatChipsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './administrar-tarea.component.html',
  styleUrl: './administrar-tarea.component.css'
})
export class administrartareacomponent implements OnInit{
  listaDeTodasLasTareasPendientes: Tareas[] = []; 

  checkBoxControl = false;

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.taskService.todasLasTareasPendientes().subscribe(itemsTareas => {
      this.listaDeTodasLasTareasPendientes = itemsTareas;
      console.log(this.listaDeTodasLasTareasPendientes);
    })
  }

  lista(){
    console.log("Mostrando Lista");
  } 
  
  // Operaciones para las tareas pendientes
  actualizarTareaCompletada(){

  }

  eliminarTareaPendiente(){}

  // Método para calcular los días entre la fecha de inicio y fin
  calcularDiasParaCompletar(fechaInicio: string, fechaFin: string): number {
    const inicio = new Date(fechaInicio);  
    const fin = new Date(fechaFin); 
    
    const diferenciaTiempo = fin.getTime() - inicio.getTime();
    
    const dias = diferenciaTiempo / (1000 * 3600 * 24);
    
    return dias;  
  }
}
