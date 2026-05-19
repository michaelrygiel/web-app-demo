import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFundsComponent } from './manage-funds.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ManageFundsComponent', () => {
  let component: ManageFundsComponent;
  let fixture: ComponentFixture<ManageFundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageFundsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFundsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
