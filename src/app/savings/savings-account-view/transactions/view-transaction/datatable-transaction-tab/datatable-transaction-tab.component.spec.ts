import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableTransactionTabComponent } from './datatable-transaction-tab.component';
import { getTestConfigModule } from '../../../../../testing/test-config';

describe('DatatableTransactionTabComponent', () => {
  let component: DatatableTransactionTabComponent;
  let fixture: ComponentFixture<DatatableTransactionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DatatableTransactionTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableTransactionTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
