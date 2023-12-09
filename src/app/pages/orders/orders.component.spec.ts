import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule, MatModule } from 'src/app/core/shared';
import { OrdersRoutingModule } from './orders-routing.module';

import { OrdersComponent } from './orders.component';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersComponent ],
      imports: [
        OrdersRoutingModule,
        SharedModule,
        MatModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    // describe('TEST HTML CONTENT ', () => {})
  // describe('TEST TS LOGIC', () => {})
  
});
