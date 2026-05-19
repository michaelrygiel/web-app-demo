import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoansAccountComponent } from './create-loans-account.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('CreateLoansAccountComponent', () => {
  let component: CreateLoansAccountComponent;
  let fixture: ComponentFixture<CreateLoansAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateLoansAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLoansAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
