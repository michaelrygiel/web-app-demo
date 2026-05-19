import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFloatingRateComponent } from './create-floating-rate.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateFloatingRateComponent', () => {
  let component: CreateFloatingRateComponent;
  let fixture: ComponentFixture<CreateFloatingRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateFloatingRateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFloatingRateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
