import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableMultiRowComponent } from './datatable-multi-row.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('DatatableMultiRowComponent', () => {
  let component: DatatableMultiRowComponent;
  let fixture: ComponentFixture<DatatableMultiRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DatatableMultiRowComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableMultiRowComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
