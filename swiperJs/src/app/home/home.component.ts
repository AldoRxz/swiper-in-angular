import { Component, OnInit, AfterContentChecked, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import Swiper, {Pagination, EffectCube, Navigation} from 'swiper';

Swiper.use([Pagination]);

// install Swiper modules
Swiper.use([Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements AfterContentChecked {
  
  @ViewChild('swiper') swiper:SwiperComponent | undefined;

  config: SwiperOptions ={
    spaceBetween: 50,
    pagination: true,
    slidesPerView: 'auto',
    effect: 'cube'
  };

  constructor() { }

  ngAfterContentChecked(): void {
    if(this.swiper){
      this.swiper.updateSwiper
    };
  }

  ngOnInit(): void {
  }

}
