import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignPreviewStepComponent } from './campaign-preview-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('CampaignPreviewStepComponent', () => {
  let component: CampaignPreviewStepComponent;
  let fixture: ComponentFixture<CampaignPreviewStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CampaignPreviewStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignPreviewStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
