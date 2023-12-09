import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { ProductModel } from 'src/app/core/models';
import { ProductsService } from 'src/app/core/services';
import { MatModule } from 'src/app/core/shared';
import { SharedModule } from 'src/app/core/shared/shared.module';

import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListComponent ],
      imports: [
        SharedModule,
        MatModule
      ],

      providers: [
        {provide: ProductsService, useClass: ProductsServiceStub }
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('TEST HTML CONTENT ', () => {})
  // describe('TEST TS LOGIC', () => {})
  
});

class ProductsServiceStub  {
  
  getProductsList(): Observable<ProductModel[]> {
    return of([])
  }
}   