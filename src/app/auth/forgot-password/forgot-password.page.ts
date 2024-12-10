import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  correo: string = '';
  constructor() { }

  ngOnInit() {
  }
  submitForm() {
    if (this.correo) {
      console.log(`Enviando instrucciones a: ${this.correo}`);
    }
  }
}
