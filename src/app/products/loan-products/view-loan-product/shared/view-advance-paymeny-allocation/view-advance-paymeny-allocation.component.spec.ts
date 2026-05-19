import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdvancePaymenyAllocationComponent } from './view-advance-paymeny-allocation.component';
import { getTestConfigModule } from '../../../../../testing/test-config';

describe('ViewAdvancePaymenyAllocationComponent', () => {
  let component: ViewAdvancePaymenyAllocationComponent;
  let fixture: ComponentFixture<ViewAdvancePaymenyAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewAdvancePaymenyAllocationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAdvancePaymenyAllocationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
