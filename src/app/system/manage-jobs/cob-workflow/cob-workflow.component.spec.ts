import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobWorkflowComponent } from './cob-workflow.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('CobWorkflowComponent', () => {
  let component: CobWorkflowComponent;
  let fixture: ComponentFixture<CobWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CobWorkflowComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobWorkflowComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
