import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMSComponent } from './sms.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SmsComponent', () => {
  let component: SMSComponent;
  let fixture: ComponentFixture<SMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SMSComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMSComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
