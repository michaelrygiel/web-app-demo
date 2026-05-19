import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfieldComponent } from './formfield.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('FormfieldComponent', () => {
  let component: FormfieldComponent;
  let fixture: ComponentFixture<FormfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FormfieldComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormfieldComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
