import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateSharesAccountComponent } from './activate-shares-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ActivateSharesAccountComponent', () => {
  let component: ActivateSharesAccountComponent;
  let fixture: ComponentFixture<ActivateSharesAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ActivateSharesAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateSharesAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
