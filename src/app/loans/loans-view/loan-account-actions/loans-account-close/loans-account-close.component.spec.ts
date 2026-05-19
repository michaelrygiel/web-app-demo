import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansAccountCloseComponent } from './loans-account-close.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('LoansAccountCloseComponent', () => {
  let component: LoansAccountCloseComponent;
  let fixture: ComponentFixture<LoansAccountCloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoansAccountCloseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansAccountCloseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
