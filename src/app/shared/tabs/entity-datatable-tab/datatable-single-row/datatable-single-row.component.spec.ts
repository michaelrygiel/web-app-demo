import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableSingleRowComponent } from './datatable-single-row.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('DatatableSingleRowComponent', () => {
  let component: DatatableSingleRowComponent;
  let fixture: ComponentFixture<DatatableSingleRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DatatableSingleRowComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableSingleRowComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
