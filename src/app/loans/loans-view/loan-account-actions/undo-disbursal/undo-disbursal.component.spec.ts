import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoDisbursalComponent } from './undo-disbursal.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('UndoDisbursalComponent', () => {
  let component: UndoDisbursalComponent;
  let fixture: ComponentFixture<UndoDisbursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [UndoDisbursalComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoDisbursalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
