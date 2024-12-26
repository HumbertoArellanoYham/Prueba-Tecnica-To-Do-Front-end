import { Component, ChangeDetectionStrategy, inject } from '@angular/core';

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
    MatDividerModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './administrar-tarea.component.html',
  styleUrl: './administrar-tarea.component.css'
})
export class administrartareacomponent {
  private formBuilder = inject(FormBuilder);

  modificarTarea = this.formBuilder.group({
    tareacompletada: [{value: false, disabled: false}],
  });

  constructor() {}
}
