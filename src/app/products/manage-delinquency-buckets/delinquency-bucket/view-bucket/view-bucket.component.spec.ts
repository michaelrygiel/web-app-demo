import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBucketComponent } from './view-bucket.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ViewBucketComponent', () => {
  let component: ViewBucketComponent;
  let fixture: ComponentFixture<ViewBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewBucketComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBucketComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
