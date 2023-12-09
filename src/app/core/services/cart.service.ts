import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderProductModel, ProductModel } from '../models';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseAPI = environment.baseAPI;
  private cardProductsCount = new Subject<number>();
  cart: ProductModel[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addOrder() { }

  addToCart(product: ProductModel): number {
    const existingProduct = this.cart.find(p => p.ProductId === product.ProductId);
    if (existingProduct) {
      existingProduct.Quantity++;
    } else {
      this.cart.push({ ...product, Quantity: 1 });
    }
    this.updateValue()
    let productCount = this.cart.find(p => p.ProductId === product.ProductId)?.Quantity as number;
    return productCount
  }

  removeFromCart(product: ProductModel): number {
    const index = this.cart.findIndex(p => p.ProductId === product.ProductId);
    if (index !== -1) {
      const cartProduct = this.cart[index];
      if (cartProduct.Quantity > 1) {
        cartProduct.Quantity--;
      } else {
        this.cart.splice(index, 1);
      }
    }
    this.updateValue()
    let productCount = this.cart.find(p => p.ProductId === product.ProductId)?.Quantity as number;
    return productCount
  }

  getTotal(): number {
    return this.cart.reduce((total, product) => total + (product.ProductPrice * product.Quantity), 0);
  }

  // Method to update the subject's value
  updateValue() {
    let cartLength = this.cart.length
    this.cardProductsCount.next(cartLength);
  }

  // Method to get the subject as an Observable
  getProductsCount(): Observable<number> {
    return this.cardProductsCount.asObservable();
  }

  // -------------------------------------------------------------------------

  getProductQuantityFromCart(ProductId: number): number {
    let productCount = this.cart.find(product => product.ProductId === ProductId)?.Quantity as number;
    // this.updateProductQuantityValueIncart(productCount)
    return productCount
  }
  // Method to update the subject's value
  // updateProductQuantityValueIncart(productCount: number) {
  //   // this.productCountInCart.next(productCount);
  // }
  // // Method to get the subject as an Observable
  // getProductsCountQuantityValueIncart(): Observable<number> {
  //   // return this.productCountInCart.asObservable();
  // }

}
