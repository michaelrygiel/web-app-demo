import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCodeComponent } from './edit-code.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditCodeComponent', () => {
  let component: EditCodeComponent;
  let fixture: ComponentFixture<EditCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditCodeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCodeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
