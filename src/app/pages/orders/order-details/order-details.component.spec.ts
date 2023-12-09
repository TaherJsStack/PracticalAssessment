import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatModule, SharedModule } from 'src/app/core/shared';

import { OrderDetailsComponent } from './order-details.component';
import { OrderModel } from '../../../core/models/order';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('OrderDetailsComponent', () => {
  let component: OrderDetailsComponent;
  let fixture: ComponentFixture<OrderDetailsComponent>;
  let obj: OrderModel = {
    OrderId:      1,
    OrderDate:    'Fri Jul 20 2019 22:55:37 GMT+0200(Eastern European Standard Time)', 
    UserId:       '1', 
    PaymentType:  'string',
    Products:[{
      ProductName:  'string',
      ProductId:    1,
      Quantity:     1,
      ProductPrice: 1 
    }], 
  }
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsComponent ],
      imports: [
        MatModule,
        SharedModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: []
    })
    .compileComponents();
    
    fixture   = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(async () => {
    component.order = {} as OrderModel; 
    fixture.detectChanges();
  })
// -----------------------------------------


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('TEST HTML CONTENT ', () => {
    it('should check mat-stepper item element exists',async () => {
      await fixture.whenStable();
      // Act
      component.order = obj
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
          // Assert
      expect(component.order).toBeTruthy();
      expect(compiled.querySelector('mat-stepper')).toBeTruthy();
    });
    it('should check mat-stepper element exists', () => {
     
      // Act
      component.order = obj
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('mat-stepper')).toBeTruthy();
    });

    it('should check mat-step elements exists', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelectorAll('mat-stepper mat-step')).toBeTruthy();
    });

    // it('should check mat-step elements length = 3 elements', () => {
      
    //   // fixture.detectChanges();
    //   const compiled = fixture.nativeElement as HTMLElement;
    //   const matStepLength = compiled.querySelectorAll('mat-step')
    //   const matStepLength2  = fixture.nativeElement.querySelectorAll('mat-step');
    //   console.log('matStepLength ->', matStepLength)
    //   console.log('matStepLength2 ->', matStepLength2)
    //   // expect(matStepLength).toEqual(2);
    // });
    it('should check order OrderId not exists', async () => {
      expect(component.order.OrderId).toBeFalsy();
    });

    it('should check not found data statement', async () => {
      // component.order = {} as OrderModel; 
      // const spyTest = jasmine.createSpyObj('', {} as OrderModel)
      // component.order = spyTest
      fixture.detectChanges();
      await fixture.whenStable();
      const compiled = fixture.debugElement.nativeElement as HTMLElement;
      const orderNotFound = compiled.querySelector('ng-template');
      console.error('orderNotFound ng-template -->', orderNotFound)
      // expect(orderNotFound).toBeTruthy();
      // const nav = fixture.debugElement.query(By.css('p'));
      // expect(nav).toBeTruthy();
    });

    // it('should have a truthy ng-template', async () => {
    //   // await fixture.whenStable();
    //   // component.order = {} as OrderModel; ;
    //   // fixture.detectChanges();
    //   const template = fixture.debugElement.nativeElement.querySelector('#noOrderFound');
    //   console.log('template -->', template)
    //   expect(template).not.toBeNull();
    //   expect(template).toBeTruthy();
    // });
  

  })
  // describe('TEST TS LOGIC', () => {
    
  // })

});
