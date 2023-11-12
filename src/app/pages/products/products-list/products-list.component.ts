import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/core/models';
import { ProductsService } from 'src/app/core/services';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  protected productsList: ProductModel[] = [] 

  constructor(
    private ProductsService: ProductsService
  ) {}
  
  ngOnInit(): void {
    this.getPorductsList()  
  }

  getPorductsList() {
    this.ProductsService.getProductsList().subscribe((res) => {
      this.productsList = res
    })
  }

}
