import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './modules/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module')
        .then(m => m.ProductsModule)
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users.module')
        .then(m => m.UsersModule)
  },
  {
    path: 'profile',
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
    redirectTo: 'principal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }