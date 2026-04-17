import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos de Angular Material exigidos para una UI "Pro"
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

const materialModules = [
  MatSnackBarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule,
  MatOptionModule,
  MatChipsModule,
  MatDialogModule,
  MatTooltipModule
];

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...materialModules 
  ],
  exports: [
    ConfirmDialogComponent,
    ReactiveFormsModule,
    ...materialModules 
  ]
})
export class SharedModule { }