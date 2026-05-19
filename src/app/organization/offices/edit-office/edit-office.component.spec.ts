import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfficeComponent } from './edit-office.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditOfficeComponent', () => {
  let component: EditOfficeComponent;
  let fixture: ComponentFixture<EditOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditOfficeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOfficeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
