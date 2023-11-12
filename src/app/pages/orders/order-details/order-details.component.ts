import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderModel, ProductModel, UserModel } from 'src/app/core/models';
import { OrderProductModel } from 'src/app/core/models/order-product';
import { CustomersService, OrdersService, ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  order:          OrderModel      = {} as OrderModel;
  user:           UserModel       = {} as UserModel;
  orderProducts:  ProductModel[]  = [];

  constructor(
    private route:            ActivatedRoute,
    private OrdersService:    OrdersService,
    private ProductsService:  ProductsService,
    private CustomersService: CustomersService
  ) {}

  ngOnInit(): void {
    this.getParams()
  }

  getParams() {
    this.route.params.subscribe(res => {
      if (res['id']) {
        this.getOrderById(+res['id'])
      }
    })
  }

  getOrderById(orderId: number){
    this.order = this.OrdersService.getOrderById(orderId) as OrderModel;
    if (this.order && this.order.UserId) {
      this.getUserData(this.order.UserId)
    }
    if (this.order && this.order.Products.length) {
      this.getOrderProductsIds(this.order.Products)
    }
  }

  getUserData(userId: string){
    this.user = this.CustomersService.getUserByUserId(userId) as UserModel
  }

  getOrderProductsIds(products: OrderProductModel[]) {
    let idsList = products.map(product => product.ProductId)
    this.getOrderProductsByIds(idsList)
  }

  getOrderProductsByIds(orderProductsIdsList: number[]) {
    this.orderProducts = this.ProductsService.getOrderProductsByIdsList(orderProductsIdsList)
    if (this.orderProducts.length) {
      this.joinquantityToEachPorduct(this.orderProducts)
    }
  }

  async joinquantityToEachPorduct(orderProduct: ProductModel[]) {
    this.orderProducts = await orderProduct.map(product1 => {
      const foundProduct = this.order.Products.find(product2 => product2.ProductId === product1.ProductId);
      return { ...product1, ...foundProduct };
    })
  }

}
