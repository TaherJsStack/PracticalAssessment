import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { OrderProductModel } from '../models/order-product';
import { ProductsService } from '../services';

@Directive({
  selector: '[appCountOrderTotal]'
})
export class CountOrderTotalDirective implements OnInit{

  @Input() products: OrderProductModel[] = [];

  constructor(
    private ProductsService:  ProductsService,
    private elementRef:       ElementRef, 
    private renderer:         Renderer2
  ) { }

  ngOnInit(): void {
    if (this.products.length) {
      this.updateProductsListwithPrice()
    }
  }

  async updateProductsListwithPrice(){
    this.products = await this.products.map(product => {
        return {
          ...product,
          Price: this.getProductPrice(product.ProductId) as number
        }
    })
    await this.calcOrderTotal()
  }

  getProductPrice(productId: number) {
    return this.ProductsService.getProductPriceById(productId)
  }

  calcOrderTotal() {
    let total = this.products.reduce((acc, curr) => {
      return acc + curr.Quantity * curr.Price;
    },0)
    this.renderer.setProperty(this.elementRef.nativeElement, 'textContent', total);
  }


}
