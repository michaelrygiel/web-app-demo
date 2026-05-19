import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHolidayComponent } from './create-holiday.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateHolidayComponent', () => {
  let component: CreateHolidayComponent;
  let fixture: ComponentFixture<CreateHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateHolidayComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHolidayComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
