import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { OrderModel } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordersList: OrderModel[] = []

  constructor(
    private http: HttpClient
  ) { }

  getOrdersList(): Observable< OrderModel[]> {
    return this.http
      .get<OrderModel[]>('assets/order-master-dp/orders.json')
      .pipe(
        tap((res) => {
          this.ordersList = res
          return res;
        })
      );
  }

  getOrderById(orderId: number) {
    return this.ordersList.find(order => order.OrderId === orderId)
  }


}
