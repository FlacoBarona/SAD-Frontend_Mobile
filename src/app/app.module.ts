import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SupabaseClient } from '@supabase/supabase-js';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment.prod';

const supabaseUrl = environment.supabaseUrl;
const supabaseKey = environment.supabaseKey;
@NgModule({
  
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: SupabaseClient,
      useValue: new SupabaseClient(supabaseUrl,supabaseKey )
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}