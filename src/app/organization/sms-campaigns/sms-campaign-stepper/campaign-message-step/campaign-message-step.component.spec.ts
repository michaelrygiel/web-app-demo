import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignMessageStepComponent } from './campaign-message-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('CampaignMessageStepComponent', () => {
  let component: CampaignMessageStepComponent;
  let fixture: ComponentFixture<CampaignMessageStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CampaignMessageStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignMessageStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
