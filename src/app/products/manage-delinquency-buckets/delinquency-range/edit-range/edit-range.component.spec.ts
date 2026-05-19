import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRangeComponent } from './edit-range.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditRangeComponent', () => {
  let component: EditRangeComponent;
  let fixture: ComponentFixture<EditRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditRangeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRangeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
