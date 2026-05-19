import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityToEntityMappingComponent } from './entity-to-entity-mapping.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('EntityToEntityMappingComponent', () => {
  let component: EntityToEntityMappingComponent;
  let fixture: ComponentFixture<EntityToEntityMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EntityToEntityMappingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityToEntityMappingComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
