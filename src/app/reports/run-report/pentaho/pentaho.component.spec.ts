import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PentahoComponent } from './pentaho.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('PentahoComponent', () => {
  let component: PentahoComponent;
  let fixture: ComponentFixture<PentahoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [PentahoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PentahoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
