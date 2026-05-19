import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProvisioningEntryComponent } from './create-provisioning-entry.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CreateProvisioningEntryComponent', () => {
  let component: CreateProvisioningEntryComponent;
  let fixture: ComponentFixture<CreateProvisioningEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CreateProvisioningEntryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProvisioningEntryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
