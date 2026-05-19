import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExternalEventsComponent } from './manage-external-events.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ManageExternalEventsComponent', () => {
  let component: ManageExternalEventsComponent;
  let fixture: ComponentFixture<ManageExternalEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageExternalEventsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExternalEventsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
