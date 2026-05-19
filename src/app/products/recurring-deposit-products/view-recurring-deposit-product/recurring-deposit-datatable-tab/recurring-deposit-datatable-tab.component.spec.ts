import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositDatatableTabComponent } from './recurring-deposit-datatable-tab.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecurringDepositDatatableTabComponent', () => {
  let component: RecurringDepositDatatableTabComponent;
  let fixture: ComponentFixture<RecurringDepositDatatableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositDatatableTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositDatatableTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
