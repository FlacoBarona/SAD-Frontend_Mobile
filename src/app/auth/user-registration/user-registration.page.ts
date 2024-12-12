import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.page.html',
  styleUrls: ['./user-registration.page.scss'],
})
export class UserRegistrationPage implements OnInit {
  nombreCompleto: string = '';
  correo: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  fechaNacimientoValue: string = ''; 
  numeroCelular: string = '';
  
  isDatePickerVisible: boolean = false; 

  constructor(
    private authService: AuthService, 
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  toggleDatePicker() {
    this.isDatePickerVisible = !this.isDatePickerVisible;
  }

  onDateDone() {
    this.isDatePickerVisible = false;
  }

  onDateSelected(event: any) {
    const selectedDate = new Date(event.detail.value); 
    const day = selectedDate.getDate().toString().padStart(2, '0');  
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0'); 
    const year = selectedDate.getFullYear();  // Obtener el año
    
    this.fechaNacimientoValue = `${day}/${month}/${year}`;
  }

  formularioValido(): boolean {
    return this.nombreCompleto && this.correo && this.contrasena && 
           this.confirmarContrasena && this.tipoDocumento && this.numeroDocumento && 
           this.fechaNacimientoValue && this.numeroCelular && (this.contrasena === this.confirmarContrasena);
  }

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

  register() {
    if (this.formularioValido()) {
      this.showToast('Registrando usuario...', 'primary');
  
      const userDetails = {
        document_type: this.tipoDocumento,
        document_number: this.numeroDocumento,
        first_name: this.nombreCompleto.split(' ')[0] || '',
        second_name: this.nombreCompleto.split(' ')[1] || null,
        last_name: this.nombreCompleto.split(' ')[2] || '',
        second_last_name: this.nombreCompleto.split(' ')[3] || null,
        birth_date: this.fechaNacimientoValue,
        phone_number: this.numeroCelular,
        role: 'user',
        status: 'active',
      };
  
      this.authService
        .register(this.correo, this.contrasena, userDetails)
        .then(() => {
          this.showToast('Registro exitoso!', 'success');
          this.router.navigate(['/login']);
        })
        .catch((error) => {
          this.showAlert('Error', `Error al registrar: ${error.message}`);
        });
    } else {
      this.showAlert(
        'Formulario inválido',
        'Por favor completa todos los campos y asegúrate de que las contraseñas coincidan.'
      );
    }
  }
}

  
    
