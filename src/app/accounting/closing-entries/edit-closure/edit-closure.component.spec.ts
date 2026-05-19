import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClosureComponent } from './edit-closure.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditClosureComponent', () => {
  let component: EditClosureComponent;
  let fixture: ComponentFixture<EditClosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditClosureComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClosureComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
