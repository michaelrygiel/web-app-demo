import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesTabComponent } from './notes-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('NotesTabComponent', () => {
  let component: NotesTabComponent;
  let fixture: ComponentFixture<NotesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [NotesTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
