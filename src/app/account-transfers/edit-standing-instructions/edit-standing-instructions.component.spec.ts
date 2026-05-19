import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStandingInstructionsComponent } from './edit-standing-instructions.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('EditStandingInstructionsComponent', () => {
  let component: EditStandingInstructionsComponent;
  let fixture: ComponentFixture<EditStandingInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditStandingInstructionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStandingInstructionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
