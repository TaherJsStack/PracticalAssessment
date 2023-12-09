import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Modify the request based on the method
    console.log('request --->', request)
    if (request.method === 'GET') {
      if (request.url.endsWith('porducts.json')) {
        // Handle getOrders method
        console.warn('Intercepted get porducts request');
        // Return dummy response
        // return of(/* Provide dummy response data */);
      } else if (request.url.includes('orders.json')) {
        // Handle getOrder method
        console.warn('Intercepted get orders request');
        // Return dummy response
        // return of(/* Provide dummy response data */);
      } else if (request.url.endsWith('getProducts')) {
        // Handle getProducts method
        console.warn('Intercepted getProducts request');
        // Return dummy response
        return of(/* Provide dummy response data */);
      }
    } else if (request.method === 'POST') {
      if (request.url.includes('addOrder')) {
        // Handle addOrder method
        console.log('Intercepted addOrder request');
        // Return dummy response
        return of(/* Provide dummy response data */);
      }
    } else if (request.method === 'PUT') {
      if (request.url.includes('editProductQuantity')) {
        // Handle editProductQuantity method
        console.log('Intercepted editProductQuantity request');
        // Return dummy response
        return of(/* Provide dummy response data */);
      }
    }

    // Pass the request to the next interceptor or the backend
    return next.handle(request);
  }
  // intercept(
  //   request: HttpRequest<any>,
  //   next: HttpHandler
  // ): Observable<HttpEvent<any>> {
  //   // Modify the request based on the method
  //   if (request.method === 'GET') {
  //     if (request.url.endsWith('getOrders')) {
  //       // Handle getOrders method
  //       console.log('Intercepted getOrders request');
  //       // Modify the request if needed
  //     } else if (request.url.includes('getOrder')) {
  //       // Handle getOrder method
  //       console.log('Intercepted getOrder request');
  //       // Modify the request if needed
  //     } else if (request.url.endsWith('getProducts')) {
  //       // Handle getProducts method
  //       console.log('Intercepted getProducts request');
  //       // Modify the request if needed
  //     }
  //   } else if (request.method === 'POST') {
  //     if (request.url.endsWith('addOrder')) {
  //       // Handle addOrder method
  //       console.log('Intercepted addOrder request');
  //       // Modify the request if needed
  //     }
  //   } else if (request.method === 'PUT') {
  //     if (request.url.includes('editProductQuantity')) {
  //       // Handle editProductQuantity method
  //       console.log('Intercepted editProductQuantity request');
  //       // Modify the request if needed
  //     }
  //   }

  //   // Pass the modified request to the next interceptor or the backend
  //   return next.handle(request);
  // }
}
