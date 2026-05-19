import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingDaysComponent } from './working-days.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('WorkingDaysComponent', () => {
  let component: WorkingDaysComponent;
  let fixture: ComponentFixture<WorkingDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [WorkingDaysComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingDaysComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
