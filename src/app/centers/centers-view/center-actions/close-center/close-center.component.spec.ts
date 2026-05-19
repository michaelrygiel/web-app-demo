import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCenterComponent } from './close-center.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('CloseCenterComponent', () => {
  let component: CloseCenterComponent;
  let fixture: ComponentFixture<CloseCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CloseCenterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseCenterComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
