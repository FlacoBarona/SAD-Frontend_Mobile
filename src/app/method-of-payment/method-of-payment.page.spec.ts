import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MethodOfPaymentPage } from './method-of-payment.page';

describe('MethodOfPaymentPage', () => {
  let component: MethodOfPaymentPage;
  let fixture: ComponentFixture<MethodOfPaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodOfPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
