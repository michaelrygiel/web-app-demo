import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecurringDepositProductComponent } from './view-recurring-deposit-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewRecurringDepositProductComponent', () => {
  let component: ViewRecurringDepositProductComponent;
  let fixture: ComponentFixture<ViewRecurringDepositProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewRecurringDepositProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecurringDepositProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
