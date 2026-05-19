import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeRepaymentComponent } from './make-repayment.component';
import { getTestConfigModule } from '../../../../testing/test-config';

describe('MakeRepaymentComponent', () => {
  let component: MakeRepaymentComponent;
  let fixture: ComponentFixture<MakeRepaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      ...getTestConfigModule(),
      declarations: [MakeRepaymentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeRepaymentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
