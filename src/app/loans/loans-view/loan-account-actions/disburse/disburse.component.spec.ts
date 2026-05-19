import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisburseComponent } from './disburse.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('DisburseComponent', () => {
  let component: DisburseComponent;
  let fixture: ComponentFixture<DisburseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DisburseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisburseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
