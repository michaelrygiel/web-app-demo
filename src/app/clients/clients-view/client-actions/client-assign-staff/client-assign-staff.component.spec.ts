import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAssignStaffComponent } from './client-assign-staff.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ClientAssignStaffComponent', () => {
  let component: ClientAssignStaffComponent;
  let fixture: ComponentFixture<ClientAssignStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ClientAssignStaffComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAssignStaffComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
