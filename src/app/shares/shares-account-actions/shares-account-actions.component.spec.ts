import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesAccountActionsComponent } from './shares-account-actions.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('SharesAccountActionsComponent', () => {
  let component: SharesAccountActionsComponent;
  let fixture: ComponentFixture<SharesAccountActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SharesAccountActionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesAccountActionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
