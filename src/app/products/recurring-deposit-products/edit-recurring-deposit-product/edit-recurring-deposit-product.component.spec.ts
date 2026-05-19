import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecurringDepositProductComponent } from './edit-recurring-deposit-product.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditRecurringDepositProductComponent', () => {
  let component: EditRecurringDepositProductComponent;
  let fixture: ComponentFixture<EditRecurringDepositProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditRecurringDepositProductComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecurringDepositProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
