import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollateralsComponent } from './collaterals.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('CollateralsComponent', () => {
  let component: CollateralsComponent;
  let fixture: ComponentFixture<CollateralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [CollateralsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollateralsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
