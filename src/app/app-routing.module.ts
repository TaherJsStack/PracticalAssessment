import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';

const routes: Routes = [
  {
    path: "",
    title: 'products',
    loadChildren: () =>
        import("./pages/products/products.module").then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: "orders",
    title: 'orders',
    loadChildren: () =>
      import("./pages/orders/orders.module").then(
        (m) => m.OrdersModule
      ),
  },
  {
    path: "checkout",
    title: 'checkout',
    component: CheckoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
