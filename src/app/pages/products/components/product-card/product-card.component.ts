import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModel } from 'src/app/core/models';
import { EditProductQuantityDialogComponent } from '../edit-product-quantity-dialog/edit-product-quantity-dialog.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product: ProductModel = {} as ProductModel

  constructor(
    public dialog: MatDialog
  ) {}


  openEditProductQuantityDialog(): void {
    const dialogRef = this.dialog.open(EditProductQuantityDialogComponent, {
      data: this.product,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.product.AvailablePieces = result
      }
    });
  }

}
