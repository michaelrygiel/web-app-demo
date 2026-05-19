import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSavingsAccountComponent } from './approve-savings-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ApproveSavingsAccountComponent', () => {
  let component: ApproveSavingsAccountComponent;
  let fixture: ComponentFixture<ApproveSavingsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ApproveSavingsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveSavingsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
