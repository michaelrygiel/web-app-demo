import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositGeneralTabComponent } from './fixed-deposit-general-tab.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('FixedDepositGeneralTabComponent', () => {
  let component: FixedDepositGeneralTabComponent;
  let fixture: ComponentFixture<FixedDepositGeneralTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositGeneralTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositGeneralTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
