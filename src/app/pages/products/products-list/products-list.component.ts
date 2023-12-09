import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModel } from 'src/app/core/models';
import { ProductsService } from 'src/app/core/services';
import { EditProductQuantityDialogComponent } from '../components/edit-product-quantity-dialog/edit-product-quantity-dialog.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  protected productsList: ProductModel[] = [] 

  constructor(
    private productsService: ProductsService
  ) {}
  
  ngOnInit(): void {
    this.getPorductsList()  
  }

  getPorductsList() {
    this.productsService.getProductsList().subscribe((res: ProductModel[]) => {
      this.productsList = res
    })
  }



}
