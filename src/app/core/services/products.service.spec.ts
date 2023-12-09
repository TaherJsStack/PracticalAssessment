import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { ProductModel } from '../models/product';
import { of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
const baseAPI = environment.baseAPI;

describe('ProductsService', () => {
  let service: ProductsService;
  let httpController: HttpTestingController;

  let responseData:ProductModel[] = [{
      "ProductId":123,
      "ProductName":"Product 1",
      "ProductPrice":123.5,
      "AvailablePieces":25,
      "ProductImg":"https:\/\/www.decolore.net\/wp-content\/uploads\/2017\/04\/product-mock-up-set-2.jpg",
      "Quantity":    221
    }]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
    service = TestBed.inject(ProductsService);
    httpController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the expected value via Observable', () => {
    const expectedValue: ProductModel[] = responseData;
    spyOn(service, 'getProductsList').and.returnValue(of(expectedValue));
    service.getProductsList().subscribe(result => {
      // console.log('getProductsList result -->', result)
      expect(result).toEqual(expectedValue);
    });
  });


  // it('should return the expected value via Observable 2', () => {
  //   // const expectedValue: ProductModel[] = responseObjData;
  //   let result: ProductModel[] = responseObjData;
  //   // spyOn(service, 'getProductsList').and.returnValue(of(responseObjData));
  //   service.getProductsList().subscribe(result => {
  //     console.log('getProductsList 2 result -->', result)
  //     expect(result).toEqual(responseObjData);
  //   });
    
  //   const req = httpController.expectOne({
  //     method: 'GET',
  //     url: `https://fakestoreapi.com/products`,
  //   });

  //   req.flush(responseObjData)
  //   httpController.verify()
  // });

  it('should test getProducts', () => {
    const response = [
      {
        "ProductId":123,
        "ProductName":"Product 1",
        "ProductPrice":123.5,
        "AvailablePieces":25,
        "ProductImg":"https:\/\/www.decolore.net\/wp-content\/uploads\/2017\/04\/product-mock-up-set-2.jpg",
        "Quantity":    221
      }
    ];

    service.getProductsList().subscribe((res) => {
      expect(res).toEqual(response);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${baseAPI}porducts.json`,
    });

    req.flush(response);
    httpController.verify()

  });
  

  it('should handle an error', () => {
    const errorMessage = 'Some error';
    spyOn(service, 'getProductsList').and.returnValue(throwError(errorMessage));
  
    service.getProductsList().subscribe(
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

  // it('should return the expected value Product Price By Id', () => {
  //   const expectedValue: ProductModel[] = [];
  //   spyOn(service, 'getOrderProductsByIdsList').and.returnValue(of(expectedValue));
  //   service.getOrderProductsByIdsList([123, 124]).subscribe(res => {
  //     console.info('getOrderProductsByIdsList -->', res)
  //     // expect(result).toEqual(expectedValue);
  //   });
  // });

});
