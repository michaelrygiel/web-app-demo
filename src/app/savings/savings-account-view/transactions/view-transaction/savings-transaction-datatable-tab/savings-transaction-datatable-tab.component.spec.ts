import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsTransactionDatatableTabComponent } from './savings-transaction-datatable-tab.component';
import { getTestConfigModule } from '../../../../../testing/test-config';

describe('SavingsTransactionDatatableTabComponent', () => {
  let component: SavingsTransactionDatatableTabComponent;
  let fixture: ComponentFixture<SavingsTransactionDatatableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingsTransactionDatatableTabComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SavingsTransactionDatatableTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
