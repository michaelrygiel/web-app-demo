import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunSelectedJobsTableComponent } from './run-selected-jobs-table.component';
import { getTestConfigModule } from '../../../../../testing/test-config';

describe('RunSelectedJobsTableComponent', () => {
  let component: RunSelectedJobsTableComponent;
  let fixture: ComponentFixture<RunSelectedJobsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RunSelectedJobsTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(RunSelectedJobsTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
