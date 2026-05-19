import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityNameComponent } from './entity-name.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('EntityNameComponent', () => {
  let component: EntityNameComponent;
  let fixture: ComponentFixture<EntityNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EntityNameComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityNameComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
