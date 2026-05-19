import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAccountPreviewStepComponent } from './savings-account-preview-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SavingsAccountPreviewStepComponent', () => {
  let component: SavingsAccountPreviewStepComponent;
  let fixture: ComponentFixture<SavingsAccountPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingsAccountPreviewStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsAccountPreviewStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
