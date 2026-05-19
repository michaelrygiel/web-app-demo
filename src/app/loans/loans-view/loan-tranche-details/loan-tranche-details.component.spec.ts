import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTrancheDetailsComponent } from './loan-tranche-details.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoanTrancheDetailsComponent', () => {
  let component: LoanTrancheDetailsComponent;
  let fixture: ComponentFixture<LoanTrancheDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanTrancheDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanTrancheDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
