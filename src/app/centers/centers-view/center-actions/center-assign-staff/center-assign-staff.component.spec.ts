import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterAssignStaffComponent } from './center-assign-staff.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('CenterAssignStaffComponent', () => {
  let component: CenterAssignStaffComponent;
  let fixture: ComponentFixture<CenterAssignStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CenterAssignStaffComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterAssignStaffComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
