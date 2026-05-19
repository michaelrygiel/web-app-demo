import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsTransactionGeneralTabComponent } from './savings-transaction-general-tab.component';
import { getTestConfigModule } from '../../../../../testing/test-config';

describe('SavingsTransactionGeneralTabComponent', () => {
  let component: SavingsTransactionGeneralTabComponent;
  let fixture: ComponentFixture<SavingsTransactionGeneralTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingsTransactionGeneralTabComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SavingsTransactionGeneralTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
