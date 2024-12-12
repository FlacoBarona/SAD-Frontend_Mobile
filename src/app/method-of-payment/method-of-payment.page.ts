import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payments/payment.service'; 

@Component({
  selector: 'app-method-of-payment',
  templateUrl: './method-of-payment.page.html',
  styleUrls: ['./method-of-payment.page.scss'],
})
export class MethodOfPaymentPage implements OnInit {

  payments: any[] = [];  

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.fetchPayments(); 
  }

  async fetchPayments() {
    try {
      this.payments = await this.paymentService.getAllPayments();
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  }

}
