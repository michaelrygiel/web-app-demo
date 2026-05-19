import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancePaymentAllocationTabComponent } from './advance-payment-allocation-tab.component';
import { getTestConfigModule } from '../../../../../testing/test-config';

describe('AdvancePaymentAllocationTabComponent', () => {
  let component: AdvancePaymentAllocationTabComponent;
  let fixture: ComponentFixture<AdvancePaymentAllocationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AdvancePaymentAllocationTabComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AdvancePaymentAllocationTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
