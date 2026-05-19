import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperButtonsComponent } from './stepper-buttons.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('StepperButtonsComponent', () => {
  let component: StepperButtonsComponent;
  let fixture: ComponentFixture<StepperButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [StepperButtonsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StepperButtonsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
