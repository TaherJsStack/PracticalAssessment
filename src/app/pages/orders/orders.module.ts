import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { MatModule, SharedModule } from 'src/app/core/shared';

@NgModule({
  declarations: [
    OrdersComponent,
    OrdersListComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    MatModule
  ]
})
export class OrdersModule { }
