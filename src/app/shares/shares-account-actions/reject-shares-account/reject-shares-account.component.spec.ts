import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectSharesAccountComponent } from './reject-shares-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('RejectSharesAccountComponent', () => {
  let component: RejectSharesAccountComponent;
  let fixture: ComponentFixture<RejectSharesAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RejectSharesAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectSharesAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
