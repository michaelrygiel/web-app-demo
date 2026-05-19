import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountNumberPreferenceComponent } from './edit-account-number-preference.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditAccountNumberPreferenceComponent', () => {
  let component: EditAccountNumberPreferenceComponent;
  let fixture: ComponentFixture<EditAccountNumberPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditAccountNumberPreferenceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountNumberPreferenceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
