import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryRepaymentComponent } from './recovery-repayment.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecoveryRepaymentComponent', () => {
  let component: RecoveryRepaymentComponent;
  let fixture: ComponentFixture<RecoveryRepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecoveryRepaymentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryRepaymentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
