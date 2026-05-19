import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountNumberPreferenceComponent } from './view-account-number-preference.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewAccountNumberPreferenceComponent', () => {
  let component: ViewAccountNumberPreferenceComponent;
  let fixture: ComponentFixture<ViewAccountNumberPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewAccountNumberPreferenceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAccountNumberPreferenceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
