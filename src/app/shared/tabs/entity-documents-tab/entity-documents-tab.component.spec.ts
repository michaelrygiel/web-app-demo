import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDocumentsTabComponent } from './entity-documents-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EntityDocumentsTabComponent', () => {
  let component: EntityDocumentsTabComponent;
  let fixture: ComponentFixture<EntityDocumentsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EntityDocumentsTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDocumentsTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
