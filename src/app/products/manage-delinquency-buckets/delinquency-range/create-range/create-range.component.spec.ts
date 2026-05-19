import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRangeComponent } from './create-range.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('CreateRangeComponent', () => {
  let component: CreateRangeComponent;
  let fixture: ComponentFixture<CreateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateRangeComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRangeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
