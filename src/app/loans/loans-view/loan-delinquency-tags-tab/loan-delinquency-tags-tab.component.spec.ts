import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDelinquencyTagsTabComponent } from './loan-delinquency-tags-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoanDelinquencyTagsTabComponent', () => {
  let component: LoanDelinquencyTagsTabComponent;
  let fixture: ComponentFixture<LoanDelinquencyTagsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanDelinquencyTagsTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDelinquencyTagsTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
