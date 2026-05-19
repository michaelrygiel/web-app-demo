import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCampaignComponent } from './view-campaign.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewCampaignComponent', () => {
  let component: ViewCampaignComponent;
  let fixture: ComponentFixture<ViewCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewCampaignComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCampaignComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
