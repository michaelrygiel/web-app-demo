import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlAccountDisplayComponent } from './gl-account-display.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('GlAccountDisplayComponent', () => {
  let component: GlAccountDisplayComponent;
  let fixture: ComponentFixture<GlAccountDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [GlAccountDisplayComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GlAccountDisplayComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
