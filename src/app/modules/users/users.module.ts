import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserFormDialogComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
