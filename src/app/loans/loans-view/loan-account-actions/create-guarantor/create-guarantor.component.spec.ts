import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGuarantorComponent } from './create-guarantor.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('CreateGuarantorComponent', () => {
  let component: CreateGuarantorComponent;
  let fixture: ComponentFixture<CreateGuarantorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateGuarantorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGuarantorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
