import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelinquencyRangeComponent } from './delinquency-range.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('DelinquencyRangeComponent', () => {
  let component: DelinquencyRangeComponent;
  let fixture: ComponentFixture<DelinquencyRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DelinquencyRangeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelinquencyRangeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
