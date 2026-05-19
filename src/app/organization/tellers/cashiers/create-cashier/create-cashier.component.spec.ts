import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCashierComponent } from './create-cashier.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('CreateCashierComponent', () => {
  let component: CreateCashierComponent;
  let fixture: ComponentFixture<CreateCashierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateCashierComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCashierComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
