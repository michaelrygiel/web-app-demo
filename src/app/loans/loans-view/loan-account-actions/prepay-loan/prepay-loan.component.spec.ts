import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepayLoanComponent } from './prepay-loan.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('PrepayLoanComponent', () => {
  let component: PrepayLoanComponent;
  let fixture: ComponentFixture<PrepayLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [PrepayLoanComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepayLoanComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
