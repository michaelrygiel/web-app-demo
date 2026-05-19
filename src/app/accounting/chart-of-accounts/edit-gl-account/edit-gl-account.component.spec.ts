import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGlAccountComponent } from './edit-gl-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditGlAccountComponent', () => {
  let component: EditGlAccountComponent;
  let fixture: ComponentFixture<EditGlAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditGlAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGlAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
