import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeOffComponent } from './charge-off.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ChargeOffComponent', () => {
  let component: ChargeOffComponent;
  let fixture: ComponentFixture<ChargeOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ChargeOffComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeOffComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
