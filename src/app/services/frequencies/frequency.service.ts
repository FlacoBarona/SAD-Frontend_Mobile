import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FrequencyService {

    private supabase: SupabaseClient;
  
    constructor() {
      this.supabase = createClient(
        environment.supabaseUrl,
        environment.supabaseKey
      );
    }
  
    async getAllFrequencies(): Promise<any> {
      const { data, error } = await this.supabase.rpc('get_all_frequencies');
      if (error) {
        console.error('Error fetching all frequencies:', error);
        throw new Error(error.message);
      }
      return data;
    }
  
    async getFrequencyById(frequencyId: string): Promise<any> {
      const { data, error } = await this.supabase.rpc('get_frequency_by_id', {
        frequency_id: frequencyId,
      });
      if (error) {
        console.error('Error fetching frequency by ID:', error);
        throw new Error(error.message);
      }
      return data;
    }
  
    async insertFrequency(data: {
      id_bus: string;
      origin: string;
      destination: string;
      departure_time: string;
      arrival_time: string;
      duration: string;
      type: string;
      price: number;
    }): Promise<any> {
      const { error, data: result } = await this.supabase.rpc('insert_frequency', data);
      if (error) {
        console.error('Error inserting frequency:', error);
        throw new Error(error.message);
      }
      return result;
    }
  
    async updateFrequency(data: {
      id_frequency: string;
      id_bus?: string;
      origin?: string;
      destination?: string;
      departure_time?: string;
      arrival_time?: string;
      duration?: string;
      type?: string;
      price?: number;
      status?: string;
    }): Promise<any> {
      const { error, data: result } = await this.supabase.rpc('update_frequency', data);
      if (error) {
        console.error('Error updating frequency:', error);
        throw new Error(error.message);
      }
      return result;
    }
  
    async deleteFrequency(frequencyId: string): Promise<any> {
      const { error, data: result } = await this.supabase.rpc('delete_frequency', {
        frequncie_id: frequencyId,
      });
      if (error) {
        console.error('Error deleting frequency:', error);
        throw new Error(error.message);
      }
      return result;
    }
  
    async insertFrequencyWithStops(data: {
      id_bus: string;
      origin: string;
      destination: string;
      departure_time: string;
      arrival_time: string;
      duration: string;
      type: string;
      price: number;
      status: string;
      stops: Array<{
        origin: string;
        destination: string;
        waiting_time: string;
      }>;
    }): Promise<any> {
      const { error, data: result } = await this.supabase.rpc('insert_frequency_with_stops', data);
      if (error) {
        console.error('Error inserting frequency with stops:', error);
        throw new Error(error.message);
      }
      return result;
    }
  
    async getAllFrequenciesWithStops(): Promise<any> {
      const { data, error } = await this.supabase.rpc('get_all_frequencies_with_stops');
      if (error) {
        console.error('Error fetching all frequencies with stops:', error);
        throw new Error(error.message);
      }
      return data;
    }
  
    async getFrequencyWithStops(frequencyId: string): Promise<any> {
      const { data, error } = await this.supabase.rpc('get_frequency_with_stops', {
        frequncy_id: frequencyId,
      });
      if (error) {
        console.error('Error fetching frequency with stops:', error);
        throw new Error(error.message);
      }
      return data;
    }
  
    async searchFrequenciesWithStops(keyword: string): Promise<any> {
      const { data, error } = await this.supabase.rpc('search_frequencies_with_stops', {
        _keyword: keyword,
      });
      if (error) {
        console.error('Error searching frequencies with stops:', error);
        throw new Error(error.message);
      }
      return data;
    }
  }

