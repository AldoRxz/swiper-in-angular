import { Component } from '@angular/core';

// import Swiper core and required modules
import SwiperCore from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <swiper
    [slidesPerView]="3"
    [spaceBetween]="50"
    (swiper)="onSwiper($event)"
    (slideChange)="onSlideChange()"
  >
    <ng-template swiperSlide>Slide 1</ng-template>
    <ng-template swiperSlide>Slide 2</ng-template>
    <ng-template swiperSlide>Slide 3</ng-template>
  </swiper>
`,
})
export class AppComponent {
  title = 'slide_video';
}
