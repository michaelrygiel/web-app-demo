import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBucketComponent } from './edit-bucket.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditBucketComponent', () => {
  let component: EditBucketComponent;
  let fixture: ComponentFixture<EditBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditBucketComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBucketComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
