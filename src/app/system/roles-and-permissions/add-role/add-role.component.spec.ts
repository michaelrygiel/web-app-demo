import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleComponent } from './add-role.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('AddRoleComponent', () => {
  let component: AddRoleComponent;
  let fixture: ComponentFixture<AddRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [AddRoleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
