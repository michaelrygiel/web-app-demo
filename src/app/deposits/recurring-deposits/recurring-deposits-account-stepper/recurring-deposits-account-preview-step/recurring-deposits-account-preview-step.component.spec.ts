import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringDepositsAccountPreviewStepComponent } from './recurring-deposits-account-preview-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('RecurringDepositsAccountPreviewStepComponent', () => {
  let component: RecurringDepositsAccountPreviewStepComponent;
  let fixture: ComponentFixture<RecurringDepositsAccountPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RecurringDepositsAccountPreviewStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringDepositsAccountPreviewStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
