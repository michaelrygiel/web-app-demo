import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDocumentsTabComponent } from './loan-documents-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoanDocumentsTabComponent', () => {
  let component: LoanDocumentsTabComponent;
  let fixture: ComponentFixture<LoanDocumentsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoanDocumentsTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDocumentsTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
