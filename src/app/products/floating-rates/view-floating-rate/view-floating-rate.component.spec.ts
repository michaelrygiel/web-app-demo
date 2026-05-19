import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFloatingRateComponent } from './view-floating-rate.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewFloatingRateComponent', () => {
  let component: ViewFloatingRateComponent;
  let fixture: ComponentFixture<ViewFloatingRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewFloatingRateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFloatingRateComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
