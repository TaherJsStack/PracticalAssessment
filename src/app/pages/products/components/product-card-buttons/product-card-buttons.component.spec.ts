import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardButtonsComponent } from './product-card-buttons.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../../../../core/shared/shared.module';

describe('ProductCardButtonsComponent', () => {
  let component: ProductCardButtonsComponent;
  let fixture: ComponentFixture<ProductCardButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardButtonsComponent ],
      imports: [HttpClientTestingModule, SharedModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
