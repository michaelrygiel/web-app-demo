import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountNumberPreferenceComponent } from './create-account-number-preference.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateAccountNumberPreferenceComponent', () => {
  let component: CreateAccountNumberPreferenceComponent;
  let fixture: ComponentFixture<CreateAccountNumberPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateAccountNumberPreferenceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountNumberPreferenceComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
