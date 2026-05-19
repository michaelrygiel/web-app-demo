import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosingEntriesComponent } from './closing-entries.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ClosingEntriesComponent', () => {
  let component: ClosingEntriesComponent;
  let fixture: ComponentFixture<ClosingEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ClosingEntriesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosingEntriesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
