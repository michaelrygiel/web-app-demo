import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanReagingComponent } from './loan-reaging.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoanReagingComponent', () => {
  let component: LoanReagingComponent;
  let fixture: ComponentFixture<LoanReagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanReagingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanReagingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
