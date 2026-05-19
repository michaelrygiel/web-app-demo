import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSharesAccountComponent } from './approve-shares-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ApproveSharesAccountComponent', () => {
  let component: ApproveSharesAccountComponent;
  let fixture: ComponentFixture<ApproveSharesAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ApproveSharesAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveSharesAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
