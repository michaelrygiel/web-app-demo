import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGroupsComponent } from './manage-groups.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ManageGroupsComponent', () => {
  let component: ManageGroupsComponent;
  let fixture: ComponentFixture<ManageGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageGroupsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGroupsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
