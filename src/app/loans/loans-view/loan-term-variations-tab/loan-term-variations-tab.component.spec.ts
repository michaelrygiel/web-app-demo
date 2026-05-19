import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTermVariationsTabComponent } from './loan-term-variations-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoanTermVariationsTabComponent', () => {
  let component: LoanTermVariationsTabComponent;
  let fixture: ComponentFixture<LoanTermVariationsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanTermVariationsTabComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanTermVariationsTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
