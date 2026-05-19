import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFamilyMembersStepComponent } from './client-family-members-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ClientFamilyMembersStepComponent', () => {
  let component: ClientFamilyMembersStepComponent;
  let fixture: ComponentFixture<ClientFamilyMembersStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ClientFamilyMembersStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFamilyMembersStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
