import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityDatatableTabComponent } from './entity-datatable-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EntityDatatableTabComponent', () => {
  let component: EntityDatatableTabComponent;
  let fixture: ComponentFixture<EntityDatatableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EntityDatatableTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityDatatableTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
