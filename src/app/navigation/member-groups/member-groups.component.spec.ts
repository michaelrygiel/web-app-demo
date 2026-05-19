import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberGroupsComponent } from './member-groups.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('MemberGroupsComponent', () => {
  let component: MemberGroupsComponent;
  let fixture: ComponentFixture<MemberGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [MemberGroupsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberGroupsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
