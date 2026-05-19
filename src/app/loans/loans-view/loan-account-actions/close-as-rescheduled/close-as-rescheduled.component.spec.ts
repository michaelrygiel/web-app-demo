import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseAsRescheduledComponent } from './close-as-rescheduled.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('CloseAsRescheduledComponent', () => {
  let component: CloseAsRescheduledComponent;
  let fixture: ComponentFixture<CloseAsRescheduledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CloseAsRescheduledComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseAsRescheduledComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
