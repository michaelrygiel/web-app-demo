import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSMSComponent } from './edit-sms.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditSmsComponent', () => {
  let component: EditSMSComponent;
  let fixture: ComponentFixture<EditSMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditSMSComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSMSComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
