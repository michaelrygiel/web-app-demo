import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansAccountPreviewStepComponent } from './loans-account-preview-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoansAccountPreviewStepComponent', () => {
  let component: LoansAccountPreviewStepComponent;
  let fixture: ComponentFixture<LoansAccountPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoansAccountPreviewStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansAccountPreviewStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
