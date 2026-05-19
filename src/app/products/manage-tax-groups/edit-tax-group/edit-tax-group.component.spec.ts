import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaxGroupComponent } from './edit-tax-group.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditTaxGroupComponent', () => {
  let component: EditTaxGroupComponent;
  let fixture: ComponentFixture<EditTaxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditTaxGroupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaxGroupComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
