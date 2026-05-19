import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDatatableStepComponent } from './client-datatable-step.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ClientDatatableStepComponent', () => {
  let component: ClientDatatableStepComponent;
  let fixture: ComponentFixture<ClientDatatableStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ClientDatatableStepComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDatatableStepComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
