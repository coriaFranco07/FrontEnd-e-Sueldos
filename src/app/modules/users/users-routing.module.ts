import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AuthGuard } from '../../core/guards/auth/auth.guard';
import { AdminGuard } from '../../core/guards/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [AuthGuard, AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
