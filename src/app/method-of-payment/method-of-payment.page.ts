import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { PaymentService } from '../services/payments/payment.service'; 

@Component({
  selector: 'app-method-of-payment',
  templateUrl: './method-of-payment.page.html',
  styleUrls: ['./method-of-payment.page.scss'],
})
export class MethodOfPaymentPage implements OnInit {

  creditCardForm: FormGroup; 

  constructor(
    private fb: FormBuilder,              
    private paymentService: PaymentService 
  ) {
    this.creditCardForm = this.fb.group({
      name: ['', Validators.required],  
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]], 
      expiryDate: ['', Validators.required],  
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],  
    });
  }

  ngOnInit() {
  
  }

  async onSubmit() {
    if (this.creditCardForm.valid) {
      const paymentData = this.creditCardForm.value;
      try {
        const newPayment = await this.paymentService.insertPayment(paymentData);  // Llamada al servicio para insertar el pago
        console.log('Pago insertado exitosamente:', newPayment);
        // Aquí puedes redirigir o mostrar un mensaje de éxito
      } catch (error) {
        console.error('Error al procesar el pago:', error);
      }
    } else {
      console.log('Formulario inválido');
    }
  }
}
