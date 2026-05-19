import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemSharesComponent } from './redeem-shares.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('RedeemSharesComponent', () => {
  let component: RedeemSharesComponent;
  let fixture: ComponentFixture<RedeemSharesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [RedeemSharesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemSharesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
