import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

import { ProductCardComponent } from './product-card.component';
import { SharedModule } from '../../../../core/shared/shared.module';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[SharedModule],
      providers: [
        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: []},
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Simple HTML', () => {
    it('should be check add prodct buttons', () => {
        // const fixture = TestBed.createComponent(ProductCardComponent);
        const buttons = fixture.debugElement.queryAll(By.css('button'))
        
      const nativeButton: HTMLButtonElement = buttons[0].nativeElement

      });
  })
});
