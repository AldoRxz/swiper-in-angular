import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlideSwiperExampleComponent } from './slide-swiper-example/slide-swiper-example.component';

import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    SlideSwiperExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
