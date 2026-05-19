import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesComponent } from './codes.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('CodesComponent', () => {
  let component: CodesComponent;
  let fixture: ComponentFixture<CodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CodesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
