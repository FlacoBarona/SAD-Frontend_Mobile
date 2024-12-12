import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as QRCode from 'qrcode';  // Importa la librería para generar códigos QR

@Component({
  selector: 'app-ticket-information',
  templateUrl: './ticket-information.page.html',
  styleUrls: ['./ticket-information.page.scss'],
})
export class TicketInformationPage implements OnInit {
  ticketDetails: any;
  userDetails: any;
  selectedSeats: any;
  seatNumbers: string = ''; // Nueva propiedad para almacenar los números de los asientos
  frequencyDetails: any;
  qrCodeData: string = '';
  qrCode: string = '';  

  constructor(private router: Router) {}

  ngOnInit() {
    this.ticketDetails = JSON.parse(localStorage.getItem('selectedFrequency')!);
    this.userDetails = { email: localStorage.getItem('userEmail') };
    this.selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')!); 

    // Generar la lista de números de asientos
    this.seatNumbers = this.selectedSeats ? this.selectedSeats.map(seat => seat.number).join(', ') : '';

    this.frequencyDetails = this.ticketDetails ? this.ticketDetails.route : '';  

    this.qrCodeData = JSON.stringify({
      reference: this.ticketDetails?.reference,
      date: this.ticketDetails?.date,
      departure: this.ticketDetails?.departure,
      arrival: this.ticketDetails?.arrival,
      userEmail: this.userDetails?.email,
      seats: this.seatNumbers,
    });

    // Generar el código QR al iniciar
    this.generateQRCode(this.qrCodeData);
  }

  generateQRCode(data: string) {
    QRCode.toDataURL(data, { errorCorrectionLevel: 'H' }, (err, url) => {
      if (err) {
        console.error('Error generando el código QR:', err);
      } else {
        this.qrCode = url;  
      }
    });
  }

  Inicio() {
    this.router.navigate(['/home-page']);
  }
}
