import { Component, OnInit } from '@angular/core';

import Swiper from 'swiper/types/swiper-class';
import { SwiperModule } from 'swiper/types/shared';
import { SwiperOptions } from 'swiper/types/swiper-options';

// import Swiper core and required modules
import SwiperCore from 'swiper';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
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
export class SlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
