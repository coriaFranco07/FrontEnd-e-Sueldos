import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth/auth.guard';
import { PrincipalComponent } from './modules/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    canMatch: [AuthGuard],
    loadChildren: () =>
      import('./modules/products/products.module')
        .then(m => m.ProductsModule)
  },
  {
    path: 'users',
    canMatch: [AuthGuard],
    loadChildren: () =>
      import('./modules/users/users.module')
        .then(m => m.UsersModule)
  },
  {
    path: 'profile',
    canMatch: [AuthGuard],
    loadChildren: () =>
      import('./modules/profile/profile.module')
        .then(m => m.ProfileModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module')
        .then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
