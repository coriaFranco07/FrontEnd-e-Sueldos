import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsCheckoutComponent } from './products-checkout.component';
import { ProductsEntryComponent } from './products-entry.component';
import { ProductsShopComponent } from './products-shop.component';
import { ProductFormDialogComponent } from './components/product-form-dialog/product-form-dialog.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsCheckoutComponent,
    ProductsEntryComponent,
    ProductsShopComponent,
    ProductFormDialogComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
