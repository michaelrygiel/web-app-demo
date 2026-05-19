import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientApprovalComponent } from './client-approval.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('ClientApprovalComponent', () => {
  let component: ClientApprovalComponent;
  let fixture: ComponentFixture<ClientApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ClientApprovalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientApprovalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
