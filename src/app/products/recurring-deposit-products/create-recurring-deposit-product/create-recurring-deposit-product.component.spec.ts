import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecurringDepositProductComponent } from './create-recurring-deposit-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateRecurringDepositProductComponent', () => {
  let component: CreateRecurringDepositProductComponent;
  let fixture: ComponentFixture<CreateRecurringDepositProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateRecurringDepositProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecurringDepositProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
