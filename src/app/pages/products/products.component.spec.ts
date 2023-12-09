import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule, MatModule } from 'src/app/core/shared';
import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      imports: [
        ProductsRoutingModule,
        SharedModule,
        MatModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
    // describe('TEST HTML CONTENT ', () => {})
  // describe('TEST TS LOGIC', () => {})
  
});
