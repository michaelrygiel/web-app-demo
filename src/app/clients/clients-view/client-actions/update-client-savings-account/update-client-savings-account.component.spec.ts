import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientSavingsAccountComponent } from './update-client-savings-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('UpdateClientSavingsAccountComponent', () => {
  let component: UpdateClientSavingsAccountComponent;
  let fixture: ComponentFixture<UpdateClientSavingsAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [UpdateClientSavingsAccountComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientSavingsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
