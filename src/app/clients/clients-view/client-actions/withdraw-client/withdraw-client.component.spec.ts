import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawClientComponent } from './withdraw-client.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('WithdrawClientComponent', () => {
  let component: WithdrawClientComponent;
  let fixture: ComponentFixture<WithdrawClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [WithdrawClientComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawClientComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
