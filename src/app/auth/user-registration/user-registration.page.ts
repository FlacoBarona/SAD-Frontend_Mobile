import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.page.html',
  styleUrls: ['./user-registration.page.scss'],
})
export class UserRegistrationPage implements OnInit {
  // Variables para los campos del formulario
  nombreCompleto: string = '';
  correo: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';
  tipoDocumento: string = '';
  numeroDocumento: string = '';
  fechaNacimientoValue: string = ''; 
  numeroCelular: string = '';
  
  isDatePickerVisible: boolean = false; 

  constructor() {}

  ngOnInit() {}

  // Método para alternar la visibilidad del calendario
  toggleDatePicker() {
    this.isDatePickerVisible = !this.isDatePickerVisible;
  }

  // Método para ocultar el calendario al presionar 'Done'
  onDateDone() {
    this.isDatePickerVisible = false;
  }

  // Captura de la fecha seleccionada
  onDateSelected(event: any) {
    const selectedDate = new Date(event.detail.value); 
    const day = selectedDate.getDate().toString().padStart(2, '0');  
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0'); 
    const year = selectedDate.getFullYear();  // Obtener el año
    
    // Formato de fecha "DD/MM/YYYY"
    this.fechaNacimientoValue = `${day}/${month}/${year}`;
  }

  formularioValido(): boolean {
    return this.nombreCompleto && this.correo && this.contrasena && 
           this.confirmarContrasena && this.tipoDocumento && this.numeroDocumento && 
           this.fechaNacimientoValue && this.numeroCelular && (this.contrasena === this.confirmarContrasena);
  }

  // Método de registro
  register() {
    if (this.formularioValido()) {
      console.log('Formulario de registro válido. Registrando...');
      // Aquí iría la lógica para procesar el registro
    } else {
      console.log('Formulario incompleto o contraseñas no coinciden.');
    }
  }
}
