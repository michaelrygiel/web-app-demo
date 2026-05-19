import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsTabComponent } from './documents-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('DocumentsTabComponent', () => {
  let component: DocumentsTabComponent;
  let fixture: ComponentFixture<DocumentsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DocumentsTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
