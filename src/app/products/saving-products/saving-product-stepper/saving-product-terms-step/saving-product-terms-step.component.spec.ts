import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingProductTermsStepComponent } from './saving-product-terms-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('SavingProductTermsStepComponent', () => {
  let component: SavingProductTermsStepComponent;
  let fixture: ComponentFixture<SavingProductTermsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingProductTermsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingProductTermsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
