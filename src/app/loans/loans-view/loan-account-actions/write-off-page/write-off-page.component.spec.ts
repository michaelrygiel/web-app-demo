import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteOffPageComponent } from './write-off-page.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('WriteOffPageComponent', () => {
  let component: WriteOffPageComponent;
  let fixture: ComponentFixture<WriteOffPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [WriteOffPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteOffPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
