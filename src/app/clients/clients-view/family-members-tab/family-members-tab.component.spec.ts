import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyMembersTabComponent } from './family-members-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('FamilyMembersTabComponent', () => {
  let component: FamilyMembersTabComponent;
  let fixture: ComponentFixture<FamilyMembersTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FamilyMembersTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyMembersTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
