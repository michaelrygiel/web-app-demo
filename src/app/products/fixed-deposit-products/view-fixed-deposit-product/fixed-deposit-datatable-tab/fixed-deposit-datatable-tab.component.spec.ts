import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositDatatableTabComponent } from './fixed-deposit-datatable-tab.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositDatatableTabComponent', () => {
  let component: FixedDepositDatatableTabComponent;
  let fixture: ComponentFixture<FixedDepositDatatableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositDatatableTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositDatatableTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
