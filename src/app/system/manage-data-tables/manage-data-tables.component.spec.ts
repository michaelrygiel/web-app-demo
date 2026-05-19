import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDataTablesComponent } from './manage-data-tables.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ManageDataTablesComponent', () => {
  let component: ManageDataTablesComponent;
  let fixture: ComponentFixture<ManageDataTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageDataTablesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDataTablesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
