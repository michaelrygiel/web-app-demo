import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingProductSettingsStepComponent } from './saving-product-settings-step.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('SavingProductSettingsStepComponent', () => {
  let component: SavingProductSettingsStepComponent;
  let fixture: ComponentFixture<SavingProductSettingsStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingProductSettingsStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingProductSettingsStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
