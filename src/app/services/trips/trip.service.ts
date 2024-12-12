import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private supabase: SupabaseClient;
  
    constructor() {
      this.supabase = createClient(
        environment.supabaseUrl,
        environment.supabaseKey
      );
    }

    async getAllTrips(): Promise<any> {
      const { data, error } = await this.supabase.rpc('get_all_trips');
      if (error) {
        console.error('Error fetching all trips:', error);
        throw new Error(error.message);
      }
      return data;
    }
    
    async getTripById(idTrip: string): Promise<any> {
      const { data, error } = await this.supabase.rpc('get_trip_by_id', { p_id_trip: idTrip });
      if (error) {
        console.error('Error fetching trip by ID:', error);
        throw new Error(error.message);
      }
      return data;
    }
    
    async insertTrip(data: {
      _id_user: string;
      _id_frequency: string;
      _origin: string;
      _destination: string;
      _departure_time_exactly: string;
      _arrival_time_exactly: string;
      _seats_qty: number;
      _total_price: number;
      _distance: number;
      _canceled?: boolean;
      _canceled_at?: string;
      _observations?: string;
      _status?: string;
    }): Promise<any> {
      const { data: result, error } = await this.supabase.rpc('insert_trip', {
        p_id_user: data._id_user,
        p_id_frequency: data._id_frequency,
        p_origin: data._origin,
        p_destination: data._destination,
        p_departure_time_exactly: data._departure_time_exactly,
        p_arrival_time_exactly: data._arrival_time_exactly,
        p_seats_qty: data._seats_qty,
        p_total_price: data._total_price,
        p_distance: data._distance,
        p_canceled: data._canceled ?? false,
        p_canceled_at: data._canceled_at ?? null,
        p_observations: data._observations ?? null,
        p_status: data._status ?? 'Active',
      });
      if (error) {
        console.error('Error inserting trip:', error);
        throw new Error(error.message);
      }
      return result;
    }
    
    async updateTrip(data: {
      _id_trip: string;
      _id_user?: string;
      _id_frequency?: string;
      _origin?: string;
      _destination?: string;
      _departure_time_exactly?: string;
      _arrival_time_exactly?: string;
      _seats_qty?: number;
      _total_price?: number;
      _distance?: number;
      _canceled?: boolean;
      _canceled_at?: string;
      _observations?: string;
      _status?: string;
    }): Promise<any> {
      const { data: result, error } = await this.supabase.rpc('update_trip', {
        p_id_trip: data._id_trip,
        p_id_user: data._id_user,
        p_id_frequency: data._id_frequency,
        p_origin: data._origin,
        p_destination: data._destination,
        p_departure_time_exactly: data._departure_time_exactly,
        p_arrival_time_exactly: data._arrival_time_exactly,
        p_seats_qty: data._seats_qty,
        p_total_price: data._total_price,
        p_distance: data._distance,
        p_canceled: data._canceled,
        p_canceled_at: data._canceled_at,
        p_observations: data._observations,
        p_status: data._status,
      });
      if (error) {
        console.error('Error updating trip:', error);
        throw new Error(error.message);
      }
      return result;
    }
    
    
    async deleteTrip(idTrip: string): Promise<any> {
      const { data: result, error } = await this.supabase.rpc('delete_trip', { p_id_trip: idTrip });
      if (error) {
        console.error('Error deleting trip:', error);
        throw new Error(error.message);
      }
      return result;
    }
    
    async getAllTripsWithDetails(): Promise<any> {
      const { data, error } = await this.supabase.rpc('get_all_trips_with_details');
      if (error) {
        console.error('Error fetching all trips with details:', error);
        throw new Error(error.message);
      }
      return data;
    }
    
    async getTripWithDetailsById(idTrip: string): Promise<any> {
      const { data, error } = await this.supabase.rpc('get_trip_with_details_by_id', { p_id_trip: idTrip });
      if (error) {
        console.error('Error fetching trip with details by ID:', error);
        throw new Error(error.message);
      }
      return data;
    }
    
    
}
