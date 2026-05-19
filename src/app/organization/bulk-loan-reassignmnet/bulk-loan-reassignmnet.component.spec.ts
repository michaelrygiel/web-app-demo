import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkLoanReassignmnetComponent } from './bulk-loan-reassignmnet.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('BulkLoanReassignmnetComponent', () => {
  let component: BulkLoanReassignmnetComponent;
  let fixture: ComponentFixture<BulkLoanReassignmnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [BulkLoanReassignmnetComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkLoanReassignmnetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
