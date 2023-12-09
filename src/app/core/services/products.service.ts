import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, tap } from 'rxjs';
import { ProductModel } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseAPI = environment.baseAPI;
  productPrice$ = new Subject<number>()

  constructor(
    private http: HttpClient
  ) { }

  /**
   * getProductsList
   * @returns Observable<ProductModel[]>
   */
  getProductsList(): Observable<ProductModel[]> {
    return this.http
      .get<ProductModel[]>(`${this.baseAPI}porducts.json`)
      .pipe(
        // map(item => {
        //   console.log('item -->', item)
        //   return {
        //     ...item,
        //     "Quantity": 221
        //   }
        // }),
        tap((res) => {
          return res;
        })
      );
  }

  /**
   * getOrderProductsByIdsList
   * @param productIdsList 
   * @returns Observable<ProductModel[]>
   */
  getOrderProductsByIdsList(productIdsList: number[]): Observable<ProductModel[]> {
    return this.http
    .get<ProductModel[]>(`${this.baseAPI}porducts.json`)
    .pipe(
      map((res) => {
        return res.filter( product => productIdsList.includes(product.ProductId) );
      })
    ); 
  }

  editProductQuantity( productId: number, quantity: number){}


  
}
