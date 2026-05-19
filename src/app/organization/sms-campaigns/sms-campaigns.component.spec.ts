import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsCampaignsComponent } from './sms-campaigns.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('SmsCampaignsComponent', () => {
  let component: SmsCampaignsComponent;
  let fixture: ComponentFixture<SmsCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SmsCampaignsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsCampaignsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
