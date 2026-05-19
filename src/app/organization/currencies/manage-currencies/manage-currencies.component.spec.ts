import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCurrenciesComponent } from './manage-currencies.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ManageCurrenciesComponent', () => {
  let component: ManageCurrenciesComponent;
  let fixture: ComponentFixture<ManageCurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ManageCurrenciesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCurrenciesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
