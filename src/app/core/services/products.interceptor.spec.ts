import { TestBed } from '@angular/core/testing';

import { ProductsInterceptor } from './products.interceptor';

describe('ProductsInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ProductsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ProductsInterceptor = TestBed.inject(ProductsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
