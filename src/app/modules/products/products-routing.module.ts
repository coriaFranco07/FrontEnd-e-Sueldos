import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsCheckoutComponent } from './products-checkout.component';
import { ProductsEntryComponent } from './products-entry.component';
import { ProductsShopComponent } from './products-shop.component';
import { AuthGuard } from '../../core/guards/auth/auth.guard';
import { AdminGuard } from '../../core/guards/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductsEntryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: ProductsComponent,
    canActivate: [AuthGuard, AdminGuard]
  },
  {
    path: 'shop',
    component: ProductsShopComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'checkout',
    component: ProductsCheckoutComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
