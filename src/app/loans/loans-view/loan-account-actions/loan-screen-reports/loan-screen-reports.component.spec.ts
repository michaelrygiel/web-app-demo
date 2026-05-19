import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanScreenReportsComponent } from './loan-screen-reports.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanScreenReportsComponent', () => {
  let component: LoanScreenReportsComponent;
  let fixture: ComponentFixture<LoanScreenReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanScreenReportsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanScreenReportsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
