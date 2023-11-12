import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/core/models';
import { CustomersService, OrdersService, ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  
  protected ordersList: OrderModel[] = [] 

  constructor(
    private OrdersService: OrdersService,
    private CustomersService: CustomersService,
    private ProductsService: ProductsService
  ) {}
  
  ngOnInit(): void {
    this.getPorductsList()
    this.CustomersService.getCustomersList()
    this.getOrdersList()
  }
  
  getOrdersList() {
    this.OrdersService.getOrdersList().subscribe((res) => {
      this.ordersList = res
    })
  }

  getPorductsList() {
    this.ProductsService.getProductsList().subscribe()
  }
}
