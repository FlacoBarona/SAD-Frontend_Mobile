import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = ''; 
  password: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  async showToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      color,
    });
    await toast.present();
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  login(): void {
    if (!this.email || !this.password) {
      this.showAlert(
        'Campos incompletos',
        'Por favor, ingresa tu correo electrónico y contraseña.'
      );
      return;
    }

    this.showToast('Iniciando sesión...', 'primary');

    this.authService
      .login(this.email, this.password)
      .then(() => {
        this.showToast('Inicio de sesión exitoso', 'success');
        this.router.navigate(['/home-page']); 
      })
      .catch((error) => {
        this.showAlert('Error al iniciar sesión', error.message);
      });
  }
}
