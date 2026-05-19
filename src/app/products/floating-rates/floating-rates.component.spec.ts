import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingRatesComponent } from './floating-rates.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('FloatingRatesComponent', () => {
  let component: FloatingRatesComponent;
  let fixture: ComponentFixture<FloatingRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FloatingRatesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingRatesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
