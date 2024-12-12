import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class StopService {

  private supabase: SupabaseClient;
  
    constructor() {
      this.supabase = createClient(
        environment.supabaseUrl,
        environment.supabaseKey
      );
    }

  async getAllStops(): Promise<any> {
    const { data, error } = await this.supabase.rpc('get_all_stops');
    if (error) {
      console.error('Error fetching all stops:', error);
      throw new Error(error.message);
    }
    return data;
  }

  async getStopById(stopId: string): Promise<any> {
    const { data, error } = await this.supabase.rpc('get_stop_by_id', { stop_id: stopId });
    if (error) {
      console.error('Error fetching stop by ID:', error);
      throw new Error(error.message);
    }
    return data;
  }

  async insertStop(data: {
    _id_frequency: string;
    _origin: string;
    _destination: string;
    _waiting_time: string;
  }): Promise<any> {
    const { data: result, error } = await this.supabase.rpc('insert_stop', data);
    if (error) {
      console.error('Error inserting stop:', error);
      throw new Error(error.message);
    }
    return result;
  }

  async updateStop(data: {
    _id_stop: string;
    _id_frequency?: string;
    _origin?: string;
    _destination?: string;
    _waiting_time?: string;
    _status?: string;
  }): Promise<any> {
    const { data: result, error } = await this.supabase.rpc('update_stop', data);
    if (error) {
      console.error('Error updating stop:', error);
      throw new Error(error.message);
    }
    return result;
  }

  async deleteStop(stopId: string): Promise<any> {
    const { data: result, error } = await this.supabase.rpc('delete_stop', { stop_id: stopId });
    if (error) {
      console.error('Error deleting stop:', error);
      throw new Error(error.message);
    }
    return result;
  }
}