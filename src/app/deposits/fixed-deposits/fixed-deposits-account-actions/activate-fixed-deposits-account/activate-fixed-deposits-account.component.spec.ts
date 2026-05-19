import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateFixedDepositsAccountComponent } from './activate-fixed-deposits-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ActivateFixedDepositsAccountComponent', () => {
  let component: ActivateFixedDepositsAccountComponent;
  let fixture: ComponentFixture<ActivateFixedDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ActivateFixedDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateFixedDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
