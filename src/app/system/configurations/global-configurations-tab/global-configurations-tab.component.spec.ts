import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalConfigurationsTabComponent } from './global-configurations-tab.component';
import { getTestConfigModule } from '../../../testing/test-config';

describe('GlobalConfigurationsTabComponent', () => {
  let component: GlobalConfigurationsTabComponent;
  let fixture: ComponentFixture<GlobalConfigurationsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [GlobalConfigurationsTabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalConfigurationsTabComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
