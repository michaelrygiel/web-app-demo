import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseSavingsAccountComponent } from './close-savings-account.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CloseSavingsAccountComponent', () => {
  let component: CloseSavingsAccountComponent;
  let fixture: ComponentFixture<CloseSavingsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CloseSavingsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseSavingsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
