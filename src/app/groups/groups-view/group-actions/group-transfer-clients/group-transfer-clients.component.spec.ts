import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTransferClientsComponent } from './group-transfer-clients.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('GroupTransferClientsComponent', () => {
  let component: GroupTransferClientsComponent;
  let fixture: ComponentFixture<GroupTransferClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [GroupTransferClientsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTransferClientsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
