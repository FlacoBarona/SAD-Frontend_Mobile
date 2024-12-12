import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private supabase: SupabaseClient;
  
    constructor() {
      this.supabase = createClient(
        environment.supabaseUrl,
        environment.supabaseKey
      );
    }

  async getAllPayments(): Promise<any> {
    const { data, error } = await this.supabase.rpc('get_all_payments');
    if (error) throw new Error(error.message);
    return data;
  }

  async getPaymentById(idPayment: string): Promise<any> {
    const { data, error } = await this.supabase.rpc('get_payment_by_id', { p_id_payment: idPayment });
    if (error) throw new Error(error.message);
    return data;
  }

  async insertPayment(payment: any): Promise<any> {
    const { data, error } = await this.supabase.rpc('insert_payment', payment);
    if (error) throw new Error(error.message);
    return data;
  }

  async updatePayment(payment: any): Promise<any> {
    const { data, error } = await this.supabase.rpc('update_payment', payment);
    if (error) throw new Error(error.message);
    return data;
  }

  async deletePayment(idPayment: string): Promise<any> {
    const { data, error } = await this.supabase.rpc('delete_payment', { p_id_payment: idPayment });
    if (error) throw new Error(error.message);
    return data;
  }

  async getAllPaymentsWithDetails(): Promise<any> {
    const { data, error } = await this.supabase.rpc('get_all_payments_with_details');
    if (error) throw new Error(error.message);
    return data;
  }

  async getPaymentDetailsById(idPayment: string): Promise<any> {
    const { data, error } = await this.supabase.rpc('get_payment_with_details_by_id', { p_id_payment: idPayment });
    if (error) throw new Error(error.message);
    return data;
  }
}
