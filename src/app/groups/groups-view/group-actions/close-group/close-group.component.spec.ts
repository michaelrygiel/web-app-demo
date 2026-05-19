import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseGroupComponent } from './close-group.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('CloseGroupComponent', () => {
  let component: CloseGroupComponent;
  let fixture: ComponentFixture<CloseGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CloseGroupComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseGroupComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
