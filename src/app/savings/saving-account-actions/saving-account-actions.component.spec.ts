import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingAccountActionsComponent } from './saving-account-actions.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('SavingAccountActionsComponent', () => {
  let component: SavingAccountActionsComponent;
  let fixture: ComponentFixture<SavingAccountActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingAccountActionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingAccountActionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
