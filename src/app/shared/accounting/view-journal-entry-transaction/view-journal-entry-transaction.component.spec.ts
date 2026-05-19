import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJournalEntryTransactionComponent } from './view-journal-entry-transaction.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewJournalEntryTransactionComponent', () => {
  let component: ViewJournalEntryTransactionComponent;
  let fixture: ComponentFixture<ViewJournalEntryTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewJournalEntryTransactionComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJournalEntryTransactionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
