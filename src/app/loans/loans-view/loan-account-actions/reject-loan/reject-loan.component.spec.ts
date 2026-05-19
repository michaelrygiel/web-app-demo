import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectLoanComponent } from './reject-loan.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RejectLoanComponent', () => {
  let component: RejectLoanComponent;
  let fixture: ComponentFixture<RejectLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RejectLoanComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectLoanComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
