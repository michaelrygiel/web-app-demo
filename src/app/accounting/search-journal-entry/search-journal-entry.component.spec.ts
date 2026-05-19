import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJournalEntryComponent } from './search-journal-entry.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('SearchJournalEntryComponent', () => {
  let component: SearchJournalEntryComponent;
  let fixture: ComponentFixture<SearchJournalEntryComponent>;

  beforeEach(async(() => {
    localStorage.setItem('mifosXLanguage', JSON.stringify({ name: 'English', code: 'en' }));
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SearchJournalEntryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJournalEntryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
