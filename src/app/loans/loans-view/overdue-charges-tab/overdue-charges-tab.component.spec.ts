import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverdueChargesTabComponent } from './overdue-charges-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('OverdueChargesTabComponent', () => {
  let component: OverdueChargesTabComponent;
  let fixture: ComponentFixture<OverdueChargesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [OverdueChargesTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverdueChargesTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
