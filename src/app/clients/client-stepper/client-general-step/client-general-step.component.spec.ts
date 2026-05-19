import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGeneralStepComponent } from './client-general-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ClientGeneralStepComponent', () => {
  let component: ClientGeneralStepComponent;
  let fixture: ComponentFixture<ClientGeneralStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ClientGeneralStepComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientGeneralStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
