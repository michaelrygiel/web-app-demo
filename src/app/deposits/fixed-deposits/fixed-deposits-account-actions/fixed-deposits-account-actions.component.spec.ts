import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedDepositsAccountActionsComponent } from './fixed-deposits-account-actions.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('FixedDepositsAccountActionsComponent', () => {
  let component: FixedDepositsAccountActionsComponent;
  let fixture: ComponentFixture<FixedDepositsAccountActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FixedDepositsAccountActionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedDepositsAccountActionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
