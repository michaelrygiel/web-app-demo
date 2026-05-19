import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingProductCurrencyStepComponent } from './saving-product-currency-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('SavingProductCurrencyStepComponent', () => {
  let component: SavingProductCurrencyStepComponent;
  let fixture: ComponentFixture<SavingProductCurrencyStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingProductCurrencyStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingProductCurrencyStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
