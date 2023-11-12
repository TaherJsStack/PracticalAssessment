import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersComponent } from './orders.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: '',
        component: OrdersListComponent,
      },
      {
        path: 'orders',
        component: OrdersListComponent,
      },
      {
        path: 'order-details/:id',
        component: OrderDetailsComponent,
      },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
