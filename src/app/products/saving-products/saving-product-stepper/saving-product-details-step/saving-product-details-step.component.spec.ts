import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingProductDetailsStepComponent } from './saving-product-details-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('SavingProductDetailsStepComponent', () => {
  let component: SavingProductDetailsStepComponent;
  let fixture: ComponentFixture<SavingProductDetailsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingProductDetailsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingProductDetailsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
