import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCampaignStepComponent } from './sms-campaign-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('SmsCampaignStepComponent', () => {
  let component: SmsCampaignStepComponent;
  let fixture: ComponentFixture<SmsCampaignStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SmsCampaignStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCampaignStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
