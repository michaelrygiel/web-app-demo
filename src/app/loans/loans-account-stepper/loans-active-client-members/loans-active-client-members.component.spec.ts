import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansActiveClientMembersComponent } from './loans-active-client-members.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('LoansActiveClientMembersComponent', () => {
  let component: LoansActiveClientMembersComponent;
  let fixture: ComponentFixture<LoansActiveClientMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LoansActiveClientMembersComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoansActiveClientMembersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
