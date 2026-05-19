import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsAccountTableComponent } from './savings-account-table.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('SavingsAccountTableComponent', () => {
  let component: SavingsAccountTableComponent;
  let fixture: ComponentFixture<SavingsAccountTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingsAccountTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsAccountTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
