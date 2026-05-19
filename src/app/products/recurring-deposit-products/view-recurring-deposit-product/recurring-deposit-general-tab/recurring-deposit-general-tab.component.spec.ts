import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositGeneralTabComponent } from './recurring-deposit-general-tab.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecurringDepositGeneralTabComponent', () => {
  let component: RecurringDepositGeneralTabComponent;
  let fixture: ComponentFixture<RecurringDepositGeneralTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositGeneralTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositGeneralTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
