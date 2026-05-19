import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProductSettingsStepComponent } from './share-product-settings-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ShareProductSettingsStepComponent', () => {
  let component: ShareProductSettingsStepComponent;
  let fixture: ComponentFixture<ShareProductSettingsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ShareProductSettingsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareProductSettingsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
