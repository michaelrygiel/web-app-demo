import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingProductChargesStepComponent } from './saving-product-charges-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('SavingProductChargesStepComponent', () => {
  let component: SavingProductChargesStepComponent;
  let fixture: ComponentFixture<SavingProductChargesStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingProductChargesStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingProductChargesStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
