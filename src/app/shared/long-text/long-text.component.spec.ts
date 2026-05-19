import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTextComponent } from './long-text.component';
import { getTestConfigModule } from '../../testing/test-config';

describe('LongTextComponent', () => {
  let component: LongTextComponent;
  let fixture: ComponentFixture<LongTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [LongTextComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LongTextComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
