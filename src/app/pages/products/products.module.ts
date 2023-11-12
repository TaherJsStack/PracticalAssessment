import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { MatModule } from 'src/app/core/shared/mat.module';
import { CountHighlightDirective } from 'src/app/core/directives/count-highlight.directive';
import { SharedModule } from 'src/app/core/shared';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductCardComponent,
    CountHighlightDirective
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MatModule
  ]
})
export class ProductsModule { }
