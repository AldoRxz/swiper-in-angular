import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSwiperExampleComponent } from './slide-swiper-example.component';

describe('SlideSwiperExampleComponent', () => {
  let component: SlideSwiperExampleComponent;
  let fixture: ComponentFixture<SlideSwiperExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideSwiperExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideSwiperExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
