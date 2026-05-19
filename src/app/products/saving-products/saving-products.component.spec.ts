import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingProductsComponent } from './saving-products.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('SavingProductsComponent', () => {
  let component: SavingProductsComponent;
  let fixture: ComponentFixture<SavingProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingProductsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
