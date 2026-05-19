import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAmountComponent } from './input-amount.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('InputAmountComponent', () => {
  let component: InputAmountComponent;
  let fixture: ComponentFixture<InputAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [InputAmountComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InputAmountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
