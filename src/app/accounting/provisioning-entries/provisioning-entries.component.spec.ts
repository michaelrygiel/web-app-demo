import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisioningEntriesComponent } from './provisioning-entries.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('ProvisioningEntriesComponent', () => {
  let component: ProvisioningEntriesComponent;
  let fixture: ComponentFixture<ProvisioningEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ProvisioningEntriesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisioningEntriesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
