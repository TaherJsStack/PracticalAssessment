import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { OrderModel } from '../models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseAPI = environment.baseAPI;
  ordersList: OrderModel[]  = [];

  constructor(
    private http: HttpClient
  ) { }

  getOrdersList(): Observable< OrderModel[]> {
    return this.http
      .get<OrderModel[]>(`${this.baseAPI}orders.json`)
      .pipe(
        tap((res) => {
          this.ordersList = res
          return res;
        })
      );
  }

  getOrderById(orderId: number): Observable< OrderModel[]> {
    return this.http
    .get<OrderModel[]>(`${this.baseAPI}orders.json`)
    .pipe(
      map((res) => {
        return res.filter( order => order.OrderId === orderId );
      })
    );  
  }

  
  addOrder(){ }
 
}
