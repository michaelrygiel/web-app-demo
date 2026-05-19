import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerInboxAndTasksComponent } from './checker-inbox-and-tasks.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('CheckerInboxAndTasksComponent', () => {
  let component: CheckerInboxAndTasksComponent;
  let fixture: ComponentFixture<CheckerInboxAndTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CheckerInboxAndTasksComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckerInboxAndTasksComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
