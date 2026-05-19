import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanLockedComponent } from './loan-locked.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanLockedComponent', () => {
  let component: LoanLockedComponent;
  let fixture: ComponentFixture<LoanLockedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanLockedComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanLockedComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
