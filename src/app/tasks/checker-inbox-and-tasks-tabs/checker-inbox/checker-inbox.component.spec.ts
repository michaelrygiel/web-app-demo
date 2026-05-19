import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerInboxComponent } from './checker-inbox.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CheckerInboxComponent', () => {
  let component: CheckerInboxComponent;
  let fixture: ComponentFixture<CheckerInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CheckerInboxComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckerInboxComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
