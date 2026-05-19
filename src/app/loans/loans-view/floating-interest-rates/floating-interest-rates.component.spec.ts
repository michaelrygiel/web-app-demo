import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingInterestRatesComponent } from './floating-interest-rates.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('FloatingInterestRatesComponent', () => {
  let component: FloatingInterestRatesComponent;
  let fixture: ComponentFixture<FloatingInterestRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FloatingInterestRatesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingInterestRatesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
