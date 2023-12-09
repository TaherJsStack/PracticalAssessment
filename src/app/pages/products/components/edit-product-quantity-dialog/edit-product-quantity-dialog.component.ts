import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductModel } from 'src/app/core/models';

@Component({
  selector: 'app-edit-product-quantity-dialog',
  templateUrl: './edit-product-quantity-dialog.component.html',
  styleUrls: ['./edit-product-quantity-dialog.component.scss']
})
export class EditProductQuantityDialogComponent {

  AvailablePieces: number = this.data.AvailablePieces

  constructor(
    public dialogRef: MatDialogRef<EditProductQuantityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductModel,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
