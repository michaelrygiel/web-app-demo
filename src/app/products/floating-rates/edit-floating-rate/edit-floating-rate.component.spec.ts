import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFloatingRateComponent } from './edit-floating-rate.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditFloatingRateComponent', () => {
  let component: EditFloatingRateComponent;
  let fixture: ComponentFixture<EditFloatingRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditFloatingRateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFloatingRateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
