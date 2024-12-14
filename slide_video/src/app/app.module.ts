import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [SwiperModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export class YourAppModule {}
