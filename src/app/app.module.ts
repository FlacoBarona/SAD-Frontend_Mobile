import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SupabaseClient } from '@supabase/supabase-js';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: SupabaseClient,
      useValue: new SupabaseClient('https://urwinhkuekffjuhxgull.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyd2luaGt1ZWtmZmp1aHhndWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2MjY3ODMsImV4cCI6MjA0NTIwMjc4M30.QaQnVhHLy4iY8PpBuuA8jDgNydwFaEwl7HmuMfHuobQ')
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}