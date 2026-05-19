import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConfigurationComponent } from './edit-configuration.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('EditConfigurationComponent', () => {
  let component: EditConfigurationComponent;
  let fixture: ComponentFixture<EditConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [EditConfigurationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConfigurationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
