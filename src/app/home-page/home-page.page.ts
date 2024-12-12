import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrequencyService } from '../services/frequencies/frequency.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit {
  viaje: string = ''; 
  filteredTrips: any[] = []; 
  loading: boolean = false; 

  constructor(
    private router: Router,
    private frequencyService: FrequencyService
  ) {}

  async submitForm() {
    this.loading = true; 
    try {
      if (this.viaje.trim() === '') {
        this.filteredTrips = await this.frequencyService.getAllFrequenciesWithStops();
      } else {
        this.filteredTrips = await this.frequencyService.searchFrequenciesWithStops(this.viaje);
      }
    } catch (error) {
      console.error('Error fetching trips:', error);
      alert('Error fetching trips: ' + error.message);
    } finally {
      this.loading = false; 
    }
  }

  selectTrip(frequency: any) {
    localStorage.setItem('selectedFrequency', JSON.stringify(frequency));
    this.router.navigate(['/seats']);  
  }
  

  ngOnInit() {
    this.submitForm();
  }
}
