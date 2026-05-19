import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDelinquencyBucketsComponent } from './manage-delinquency-buckets.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ManageDelinquencyBucketsComponent', () => {
  let component: ManageDelinquencyBucketsComponent;
  let fixture: ComponentFixture<ManageDelinquencyBucketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageDelinquencyBucketsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDelinquencyBucketsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
