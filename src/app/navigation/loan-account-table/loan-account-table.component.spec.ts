import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAccountTableComponent } from './loan-account-table.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('LoanAccountTableComponent', () => {
  let component: LoanAccountTableComponent;
  let fixture: ComponentFixture<LoanAccountTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanAccountTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAccountTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
