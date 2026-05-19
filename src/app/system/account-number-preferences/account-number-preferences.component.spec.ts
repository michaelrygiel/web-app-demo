import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNumberPreferencesComponent } from './account-number-preferences.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('AccountNumberPreferencesComponent', () => {
  let component: AccountNumberPreferencesComponent;
  let fixture: ComponentFixture<AccountNumberPreferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AccountNumberPreferencesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNumberPreferencesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
