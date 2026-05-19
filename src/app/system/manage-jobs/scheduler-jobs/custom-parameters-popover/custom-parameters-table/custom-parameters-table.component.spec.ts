import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomParametersTableComponent } from './custom-parameters-table.component';
import { getTestConfigModule } from '../../../../../testing/test-config';

describe('CustomParametersTableComponent', () => {
  let component: CustomParametersTableComponent;
  let fixture: ComponentFixture<CustomParametersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CustomParametersTableComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomParametersTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
