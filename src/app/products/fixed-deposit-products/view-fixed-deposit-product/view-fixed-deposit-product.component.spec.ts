import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFixedDepositProductComponent } from './view-fixed-deposit-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewFixedDepositProductComponent', () => {
  let component: ViewFixedDepositProductComponent;
  let fixture: ComponentFixture<ViewFixedDepositProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewFixedDepositProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFixedDepositProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
