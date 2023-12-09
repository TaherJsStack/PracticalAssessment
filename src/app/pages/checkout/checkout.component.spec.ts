import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatModule } from '../../core/shared/mat.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductModel } from '../../core/models/product';
import { By } from '@angular/platform-browser';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
      imports: [
        MatModule, 
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientTestingModule, 
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('TEST HTML CONTENT ', () => {
    it('should check mat list element exists', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('mat-list')).toBeTruthy();
    });

    it('should check mat-list item element exists',async () => {

      fixture.detectChanges();
      await fixture.whenStable();
     
      let obj: ProductModel = {
        ProductId:        1,
        ProductName:      'string',
        ProductPrice:     1,
        AvailablePieces:  1,
        ProductImg:       'string',
        Quantity:         1
      }
      // Act
      component.orderProducts = [obj]
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
          // Assert
      expect(compiled.querySelector('mat-list-item')).toBeTruthy();
    });

    // it('should check calculator works correctly In UI',async () => {

    //   let obj: ProductModel = {
    //     ProductId:        1,
    //     ProductName:      'string',
    //     ProductPrice:     5,
    //     AvailablePieces:  2,
    //     ProductImg:       'string',
    //     Quantity:         7
    //   }
    //   // Act
    //   component.orderProducts = [obj]

    //   fixture.detectChanges();
    //   await fixture.whenStable();

    //   const ProductPrice = fixture.nativeElement(By.css('.ProductPrice'))?.textContent as HTMLElement
    //   const Quantity = +fixture.nativeElement.query(By.css('.Quantity'))
    //   const Total = +fixture.nativeElement.query(By.css('.Total'))

    //   console.log('------>',typeof ProductPrice, ProductPrice)

    //   await fixture.whenStable();
   
    //   fixture.detectChanges();
    //       // Assert
    //       console.log('------>',+ProductPrice, +Quantity, +ProductPrice * +Quantity, +Total)
    //   expect(+ProductPrice * +Quantity).toEqual(+Total);
    // });

    it('should check form element exists', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('form')).toBeTruthy();
    });

    it('should check form inputs element exists with lingth', () => {
      let formField = fixture.nativeElement.querySelectorAll('form mat-form-field');
      expect(formField.length).toBeGreaterThanOrEqual(4);
    });

    it('should check form submit button element exists', () => {
      let formField = fixture.nativeElement.querySelectorAll('form button');
      expect(formField.length).toBeGreaterThanOrEqual(1);
    });
   
    it('should check form submit button element exists containe text " Submit Order " ', () => {
      const compiled    = fixture.nativeElement as HTMLElement;
      const textContent = compiled.querySelector('form button')?.textContent
      expect(textContent).toContain('Submit Order');
    });
   
    // 

  })

  

});
