import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordPreferencesComponent } from './password-preferences.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('PasswordPreferencesComponent', () => {
  let component: PasswordPreferencesComponent;
  let fixture: ComponentFixture<PasswordPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [PasswordPreferencesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordPreferencesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
