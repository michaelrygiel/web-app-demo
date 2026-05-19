import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleCashComponent } from './settle-cash.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('SettleCashComponent', () => {
  let component: SettleCashComponent;
  let fixture: ComponentFixture<SettleCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SettleCashComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettleCashComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
