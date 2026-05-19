import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingProductAccountingStepComponent } from './saving-product-accounting-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('SavingProductAccountingStepComponent', () => {
  let component: SavingProductAccountingStepComponent;
  let fixture: ComponentFixture<SavingProductAccountingStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingProductAccountingStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingProductAccountingStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
