import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './principal.component';

// Angular Material
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,

    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,

    RouterModule

  ]
})
export class PrincipalModule { }