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

  total:          number          = 0;
  orderProducts:  ProductModel[]  = [];
  order:          OrderModel      = {} as OrderModel;
  user:           UserModel       = {} as UserModel;

  constructor(
    private route:            ActivatedRoute,
    private ordersService:    OrdersService,
    private productsService:  ProductsService,
    private customersService: CustomersService,
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
    this.ordersService.getOrderById(orderId).subscribe(res => {
      if (res) {        
        this.order = res[0]
        this.getUserData(res[0].UserId)
        this.getOrderProductsIds(res[0].Products)
      }
    });    
  }

  getUserData(userId: string){
    this.customersService.getUserByUserId(userId).subscribe(res => {
      this.user = res[0]
    })
  }

  getOrderProductsIds(products: OrderProductModel[]) {
    let idsList = products.map(product => product.ProductId)
    if (idsList.length) {
      this.getOrderProductsByIds(idsList)
    }
  }

  getOrderProductsByIds(orderProductsIdsList: number[]) {
    this.productsService.getOrderProductsByIdsList(orderProductsIdsList).subscribe(res => {
      if (res.length) {
        this.joinquantityToEachPorduct(res)
      }
    })
  }

  joinquantityToEachPorduct(_orderProduct: ProductModel[]) {
    this.orderProducts = _orderProduct.map(orderProduct => {
      const foundProduct = this.order.Products.find(foundOrderProduct => foundOrderProduct.ProductId === orderProduct.ProductId);
      return { ...orderProduct, ...foundProduct };
    })
    this.calcOrderTotal()
  }

  calcOrderTotal() {
    this.total = this.orderProducts.reduce((acc, curr) => {
      return acc + curr.Quantity * curr.ProductPrice;
    },0)
  }

}
