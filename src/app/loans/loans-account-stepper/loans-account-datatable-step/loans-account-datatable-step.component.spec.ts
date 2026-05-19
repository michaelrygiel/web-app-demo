import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansAccountDatatableStepComponent } from './loans-account-datatable-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoansAccountDatatableStepComponent', () => {
  let component: LoansAccountDatatableStepComponent;
  let fixture: ComponentFixture<LoansAccountDatatableStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoansAccountDatatableStepComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansAccountDatatableStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
