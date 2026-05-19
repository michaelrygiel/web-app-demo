import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateCenterComponent } from './activate-center.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ActivateCenterComponent', () => {
  let component: ActivateCenterComponent;
  let fixture: ComponentFixture<ActivateCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ActivateCenterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateCenterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
