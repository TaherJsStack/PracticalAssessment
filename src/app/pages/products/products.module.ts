import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SharedModule, MatModule } from 'src/app/core/shared';
import { CountHighlightDirective } from 'src/app/core/directives';
import { ProductCardComponent, ProductCardButtonsComponent } from './components';
import { EditProductQuantityDialogComponent } from './components/edit-product-quantity-dialog/edit-product-quantity-dialog.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductCardComponent,
    ProductCardButtonsComponent,
    CountHighlightDirective,
    EditProductQuantityDialogComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MatModule
  ]
})
export class ProductsModule { }
