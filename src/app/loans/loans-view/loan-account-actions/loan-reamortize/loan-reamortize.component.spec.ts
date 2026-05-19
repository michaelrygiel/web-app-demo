import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanReamortizeComponent } from './loan-reamortize.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanReamortizeComponent', () => {
  let component: LoanReamortizeComponent;
  let fixture: ComponentFixture<LoanReamortizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanReamortizeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanReamortizeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
