import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityNotesTabComponent } from './entity-notes-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EntityNotesTabComponent', () => {
  let component: EntityNotesTabComponent;
  let fixture: ComponentFixture<EntityNotesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EntityNotesTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityNotesTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
