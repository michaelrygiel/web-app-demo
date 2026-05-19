import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlAccountSelectorComponent } from './gl-account-selector.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('GlAccountSelectorComponent', () => {
  let component: GlAccountSelectorComponent;
  let fixture: ComponentFixture<GlAccountSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [GlAccountSelectorComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GlAccountSelectorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
