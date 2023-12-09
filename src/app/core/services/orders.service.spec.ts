import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import { OrderModel } from '../models/order';
import { of, throwError } from 'rxjs';

describe('OrdersService', () => {
  let service: OrdersService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(OrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the expected value via Observable', () => {
    const expectedValue: OrderModel[] = [];
    spyOn(service, 'getOrdersList').and.returnValue(of(expectedValue));
    service.getOrdersList().subscribe(result => {
      expect(result).toEqual(expectedValue);
    });
  });
  it('should return the expected value via get Order ById', () => {
    const expectedValue: OrderModel = {} as OrderModel ;
    // spyOn(service, 'getOrderById').and.returnValue(expectedValue);
    let result = service.getOrderById(5);
    // expect(result).toEqual(expectedValue);
  });

  
  it('should handle an error', () => {
    const errorMessage = 'Some error';
    spyOn(service, 'getOrdersList').and.returnValue(throwError(errorMessage));
  
    service.getOrdersList().subscribe(
      () => {
        // Success callback
        fail('Expected error to be thrown');
      },
      error => {
        // Error callback
        expect(error).toBe(errorMessage);
      }
    );
  });
});

// function throwError(errorMessage: string): import("rxjs").Observable<OrderModel[]> {
//   throw new Error('Function not implemented.');
// }
// function throwError(errorMessage: string): import("rxjs").Observable<OrderModel[]> {
//   throw new Error('Function not implemented.');
// }

