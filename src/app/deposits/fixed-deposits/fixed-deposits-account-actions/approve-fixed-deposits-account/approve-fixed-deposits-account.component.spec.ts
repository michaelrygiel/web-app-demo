import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveFixedDepositsAccountComponent } from './approve-fixed-deposits-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ApproveFixedDepositsAccountComponent', () => {
  let component: ApproveFixedDepositsAccountComponent;
  let fixture: ComponentFixture<ApproveFixedDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ApproveFixedDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveFixedDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
