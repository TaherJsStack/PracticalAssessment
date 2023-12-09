import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'app-product-card-buttons',
  templateUrl: './product-card-buttons.component.html',
  styleUrls: ['./product-card-buttons.component.scss']
})
export class ProductCardButtonsComponent implements OnInit {

  @Input() product: ProductModel = {} as ProductModel

  productCount: number = 0;

  constructor(
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.productCount = this.cartService.getProductQuantityFromCart(this.product.ProductId)
  }

  addToCart(): void {
    this.productCount = this.cartService.addToCart(this.product);
  }

  removeFromCart(): void {
    this.productCount = this.cartService.removeFromCart(this.product);
  }

}
