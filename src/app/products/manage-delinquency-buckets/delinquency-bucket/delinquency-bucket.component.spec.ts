import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelinquencyBucketComponent } from './delinquency-bucket.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('DelinquencyBucketComponent', () => {
  let component: DelinquencyBucketComponent;
  let fixture: ComponentFixture<DelinquencyBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DelinquencyBucketComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelinquencyBucketComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
