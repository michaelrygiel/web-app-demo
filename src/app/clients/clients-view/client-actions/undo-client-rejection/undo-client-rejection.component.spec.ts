import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoClientRejectionComponent } from './undo-client-rejection.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('UndoClientRejectionComponent', () => {
  let component: UndoClientRejectionComponent;
  let fixture: ComponentFixture<UndoClientRejectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [UndoClientRejectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoClientRejectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
