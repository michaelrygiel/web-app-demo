import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseSharesAccountComponent } from './close-shares-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CloseSharesAccountComponent', () => {
  let component: CloseSharesAccountComponent;
  let fixture: ComponentFixture<CloseSharesAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CloseSharesAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseSharesAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
