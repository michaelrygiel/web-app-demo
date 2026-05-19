import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateSavingsAccountComponent } from './activate-savings-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ActivateSavingsAccountComponent', () => {
  let component: ActivateSavingsAccountComponent;
  let fixture: ComponentFixture<ActivateSavingsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ActivateSavingsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateSavingsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
