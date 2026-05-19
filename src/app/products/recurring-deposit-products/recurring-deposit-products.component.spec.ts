import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositProductsComponent } from './recurring-deposit-products.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('RecurringDepositProductsComponent', () => {
  let component: RecurringDepositProductsComponent;
  let fixture: ComponentFixture<RecurringDepositProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositProductsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
