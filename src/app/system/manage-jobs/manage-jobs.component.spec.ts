import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJobsComponent } from './manage-jobs.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ManageJobsComponent', () => {
  let component: ManageJobsComponent;
  let fixture: ComponentFixture<ManageJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageJobsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageJobsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
