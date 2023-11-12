import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsList: ProductModel[]=[]

  constructor(
    private http: HttpClient
  ) { }

  getProductsList(): Observable<ProductModel[]> {
    return this.http
      .get<ProductModel[]>('assets/order-master-dp/porducts.json')
      .pipe(
        tap((res) => {
          this.productsList = res
          return res;
        })
      );
  }

  getProductPriceById(productId: number){
    return this.productsList.find(product => product.ProductId === productId)?.ProductPrice
  }

  getOrderProductsByIdsList(productIdsList: number[]) {
    return this.productsList.filter(product => productIdsList.includes(product.ProductId))
  }

}
