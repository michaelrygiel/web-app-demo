import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsActiveClientMembersComponent } from './savings-active-client-members.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('SavingsActiveClientMembersComponent', () => {
  let component: SavingsActiveClientMembersComponent;
  let fixture: ComponentFixture<SavingsActiveClientMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [SavingsActiveClientMembersComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SavingsActiveClientMembersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
