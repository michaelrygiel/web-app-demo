import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartOfAccountsComponent } from './chart-of-accounts.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ChartOfAccountsComponent', () => {
  let component: ChartOfAccountsComponent;
  let fixture: ComponentFixture<ChartOfAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ChartOfAccountsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartOfAccountsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
