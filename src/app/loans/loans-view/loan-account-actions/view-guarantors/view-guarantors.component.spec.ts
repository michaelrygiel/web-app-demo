import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGuarantorsComponent } from './view-guarantors.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('ViewGuarantorsComponent', () => {
  let component: ViewGuarantorsComponent;
  let fixture: ComponentFixture<ViewGuarantorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [ViewGuarantorsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGuarantorsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
