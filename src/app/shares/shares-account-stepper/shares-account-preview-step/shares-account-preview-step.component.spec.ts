import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesAccountPreviewStepComponent } from './shares-account-preview-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SharesAccountPreviewStepComponent', () => {
  let component: SharesAccountPreviewStepComponent;
  let fixture: ComponentFixture<SharesAccountPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SharesAccountPreviewStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesAccountPreviewStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
