import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGroupMembersComponent } from './manage-group-members.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ManageGroupMembersComponent', () => {
  let component: ManageGroupMembersComponent;
  let fixture: ComponentFixture<ManageGroupMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageGroupMembersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGroupMembersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
