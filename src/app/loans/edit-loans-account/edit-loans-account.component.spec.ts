import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLoansAccountComponent } from './edit-loans-account.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('EditLoansAccountComponent', () => {
  let component: EditLoansAccountComponent;
  let fixture: ComponentFixture<EditLoansAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditLoansAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLoansAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
