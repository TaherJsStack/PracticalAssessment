import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatModule, SharedModule } from 'src/app/core/shared';
import { OrdersListComponent } from './orders-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { OrderModel } from '../../../core/models/order';

describe('OrdersListComponent', () => {
  let component: OrdersListComponent;
  let fixture: ComponentFixture<OrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersListComponent ],
      imports: [
        SharedModule,
        MatModule,
        RouterTestingModule.withRoutes([
          {path: 'order-details', component: DummyCommponent }
        ])
      ],
      providers: [Location],

    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be check that we had only one table ', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    let table = fixture.nativeElement.querySelectorAll('table');
    expect(table.length).toBe(1);
  });
  
  it('should be add to table tbody tr data', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
      component.ordersList = [{
        "OrderId":      1,
        "OrderDate":    'Fri Jul 20 2019 22:55:37 GMT+0200(Eastern European Standard Time)', 
        "UserId":       'string', 
        "PaymentType":  'string',
        "Products":[{
          ProductName: 'string',
          ProductId:    1,
          Quantity:     1,
          ProductPrice: 1
        }]
      }]
    fixture.detectChanges();
    let tableRows = fixture.nativeElement.querySelectorAll('.table-responsive table tbody tr');
    expect(tableRows).toBeTruthy();
  });

  it('should be confirm that table tbody tr created with 6 of td', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    // Arrange
    const obj: OrderModel = {
      "OrderId":      1,
      "OrderDate":    'Fri Jul 20 2019 22:55:37 GMT+0200(Eastern European Standard Time)', 
      "UserId":       'string', 
      "PaymentType":  'string',
      "Products":[{
        ProductName: 'string',
        ProductId:    1,
        Quantity:     1,
        ProductPrice: 1
      }]
    }
    // Act
    component.ordersList = [obj], 
    fixture.detectChanges();
    let tableRowsTd = fixture.nativeElement.querySelectorAll('.table-responsive table tbody tr td');
    // Assert
    expect(tableRowsTd.length).toBeGreaterThanOrEqual(6);
  });

  it('should be check table tbody tr toContain Details Button', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    component.ordersList = [{
      "OrderId":      1,
      "OrderDate":    'Fri Jul 20 2019 22:55:37 GMT+0200(Eastern European Standard Time)', 
      "UserId":       'string', 
      "PaymentType":  'string',
      "Products":[{
        ProductName: 'string',
        ProductId:    1,
        Quantity:     1,
        ProductPrice: 1
      }]
    }]
    fixture.detectChanges();
    let tableRows = fixture.nativeElement.querySelectorAll('.table-responsive table tbody tr');
    let headerRow = tableRows[0];
    // expect(headerRow.cells[0].innerHTML).toBe('Email');
    expect(headerRow.cells[6]?.textContent).toContain('Details');
  });

  it('should be check show order details button', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('Details');
  });

  it('should be navigate to show order details', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = TestBed.get<Location>(Location)
    expect(compiled.path().concat('order-details')).toBe('order-details');
  });

  // ------------------------------------------------------------------
  it('should be confirm that ordersList length to Be Greater Than Or Equal 1', async () => {
    fixture.detectChanges();
    await fixture.whenStable();
    expect(component.ordersList.length).toBeGreaterThanOrEqual(1);
  });

  // describe('TEST HTML CONTENT ', () => {})
  // describe('TEST TS LOGIC', () => {})
});

@Component({
  template: ''
})
class DummyCommponent{}