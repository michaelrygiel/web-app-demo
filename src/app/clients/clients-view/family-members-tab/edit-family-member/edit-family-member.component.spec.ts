import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFamilyMemberComponent } from './edit-family-member.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditFamilyMemberComponent', () => {
  let component: EditFamilyMemberComponent;
  let fixture: ComponentFixture<EditFamilyMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditFamilyMemberComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFamilyMemberComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
