import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStandingInstructionsComponent } from './list-standing-instructions.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ListStandingInstructionsComponent', () => {
  let component: ListStandingInstructionsComponent;
  let fixture: ComponentFixture<ListStandingInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ListStandingInstructionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStandingInstructionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
