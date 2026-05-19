import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialActivityMappingsComponent } from './financial-activity-mappings.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('FinancialActivityMappingsComponent', () => {
  let component: FinancialActivityMappingsComponent;
  let fixture: ComponentFixture<FinancialActivityMappingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [FinancialActivityMappingsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialActivityMappingsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
