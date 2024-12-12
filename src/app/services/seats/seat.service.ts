import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  private supabase: SupabaseClient;
  
    constructor() {
      this.supabase = createClient(
        environment.supabaseUrl,
        environment.supabaseKey
      );
    }

  async getAllSeats(): Promise<any> {
    const { data, error } = await this.supabase.rpc('get_all_seats');
    if (error) {
      console.error('Error fetching all seats:', error);
      throw new Error(error.message);
    }
    return data;
  }

  async getSeatById(seatId: string): Promise<any> {
    const { data, error } = await this.supabase.rpc('get_seat_by_id', { seat_id: seatId });
    if (error) {
      console.error('Error fetching seat by ID:', error);
      throw new Error(error.message);
    }
    return data;
  }

  async insertSeat(data: { p_id_bus: string; p_type: string }): Promise<any> {
    const { data: result, error } = await this.supabase.rpc('insert_seat', data);
    if (error) {
      console.error('Error inserting seat:', error);
      throw new Error(error.message);
    }
    return result;
  }

  async updateSeat(data: {
    _id_seat: string;
    _id_bus?: string;
    _type?: string;
    _status?: boolean;
    _activity_status?: boolean;
  }): Promise<any> {
    const { data: result, error } = await this.supabase.rpc('update_seat', data);
    if (error) {
      console.error('Error updating seat:', error);
      throw new Error(error.message);
    }
    return result;
  }

  async deleteSeat(seatId: string): Promise<any> {
    const { data: result, error } = await this.supabase.rpc('delete_seat', { seat_id: seatId });
    if (error) {
      console.error('Error deleting seat:', error);
      throw new Error(error.message);
    }
    return result;
  }
}
