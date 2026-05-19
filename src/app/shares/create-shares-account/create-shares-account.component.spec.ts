import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSharesAccountComponent } from './create-shares-account.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('CreateSharesAccountComponent', () => {
  let component: CreateSharesAccountComponent;
  let fixture: ComponentFixture<CreateSharesAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateSharesAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSharesAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
