import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSavingsAccountComponent } from './create-savings-account.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('CreateSavingsAccountComponent', () => {
  let component: CreateSavingsAccountComponent;
  let fixture: ComponentFixture<CreateSavingsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateSavingsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSavingsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
