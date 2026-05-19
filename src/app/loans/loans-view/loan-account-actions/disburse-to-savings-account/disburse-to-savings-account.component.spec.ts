import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisburseToSavingsAccountComponent } from './disburse-to-savings-account.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('DisburseToSavingsAccountComponent', () => {
  let component: DisburseToSavingsAccountComponent;
  let fixture: ComponentFixture<DisburseToSavingsAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [DisburseToSavingsAccountComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisburseToSavingsAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
