import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlimAccountComponent } from './glim-account.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('GlimAccountComponent', () => {
  let component: GlimAccountComponent;
  let fixture: ComponentFixture<GlimAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [GlimAccountComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlimAccountComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
