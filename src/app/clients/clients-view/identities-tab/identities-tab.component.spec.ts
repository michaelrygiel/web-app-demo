import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentitiesTabComponent } from './identities-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('IdentitiesTabComponent', () => {
  let component: IdentitiesTabComponent;
  let fixture: ComponentFixture<IdentitiesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [IdentitiesTabComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentitiesTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
