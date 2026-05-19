import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaxComponentComponent } from './edit-tax-component.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('EditTaxComponentComponent', () => {
  let component: EditTaxComponentComponent;
  let fixture: ComponentFixture<EditTaxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditTaxComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaxComponentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
