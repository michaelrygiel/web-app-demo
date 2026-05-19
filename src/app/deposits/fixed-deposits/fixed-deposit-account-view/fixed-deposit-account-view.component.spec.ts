import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositAccountViewComponent } from './fixed-deposit-account-view.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('FixedDepositAccountViewComponent', () => {
  let component: FixedDepositAccountViewComponent;
  let fixture: ComponentFixture<FixedDepositAccountViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositAccountViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositAccountViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
