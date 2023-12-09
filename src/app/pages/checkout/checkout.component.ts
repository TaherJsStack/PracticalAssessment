import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { OrderModel, OrderProductModel, ProductModel, UserModel } from 'src/app/core/models';
import { CustomersService } from 'src/app/core/services';
import { CartService } from '../../core/services/cart.service';
import { ProductsService } from '../../core/services/products.service';
import { OrdersService } from '../../core/services/orders.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  total:          number           = 0;
  orderProducts:  ProductModel[]   = [];
  order:          OrderModel       = {} as OrderModel;
  user:           UserModel        = {} as UserModel;
  form:           UntypedFormGroup = new FormGroup({});
  
  constructor(
    private formBuilder:      FormBuilder,
    private cartService:      CartService,
    private ordersService:    OrdersService,
    private productsService:  ProductsService,
    private customersService: CustomersService,
    
  ){}

  ngOnInit(): void {
    this.orderProducts = this.cartService.cart
    this.initForm()
  }

  initForm() {
    this.form = this.formBuilder.group({
      Name:         new FormControl('', [Validators.required]),
      Email:        new FormControl('', [Validators.required]),
      Phone:        new FormControl('', [Validators.required]),
      Address:      new FormControl('', [Validators.required]),
      RegisterDate: new FormControl(''),
    })
  }

  submit() {
    if (this.form.valid) {
      // this.o
      // this.ProductsService.add(updatedInputs).subscribe(res => {
      //   this.router.navigateByUrl('/system/products');
      // })
    }
  }

  ngOnDestroy(): void {}

}
