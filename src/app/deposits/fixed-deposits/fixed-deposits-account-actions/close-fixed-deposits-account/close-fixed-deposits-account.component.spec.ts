import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseFixedDepositsAccountComponent } from './close-fixed-deposits-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('CloseFixedDepositsAccountComponent', () => {
  let component: CloseFixedDepositsAccountComponent;
  let fixture: ComponentFixture<CloseFixedDepositsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CloseFixedDepositsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseFixedDepositsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
