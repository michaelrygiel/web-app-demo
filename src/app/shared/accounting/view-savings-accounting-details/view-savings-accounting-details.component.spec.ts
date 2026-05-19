import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSavingsAccountingDetailsComponent } from './view-savings-accounting-details.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ViewSavingsAccountingDetailsComponent', () => {
  let component: ViewSavingsAccountingDetailsComponent;
  let fixture: ComponentFixture<ViewSavingsAccountingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewSavingsAccountingDetailsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSavingsAccountingDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
