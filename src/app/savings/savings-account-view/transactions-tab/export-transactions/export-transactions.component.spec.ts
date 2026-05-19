import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportTransactionsComponent } from './export-transactions.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ExportTransactionsComponent', () => {
  let component: ExportTransactionsComponent;
  let fixture: ComponentFixture<ExportTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ExportTransactionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportTransactionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
