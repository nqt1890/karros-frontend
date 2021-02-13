import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('300ms', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class CarouselComponent implements OnInit {

  constructor() { }

  slides = [
    { src: "assets/Bitmap.png" },
    { src: "assets/banner2.jpg" },
    { src: "assets/banner3.jpg" }
  ];

  currentSlide = 0;

  indicator = ["active", "", ""]

  ngOnInit(): void {
    this.Repeat();
  }

  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 3500);
  }

  __FunctionSlide() {
    if (this.currentSlide < 2) {
      this.currentSlide += 1;
    }
    else {
      this.currentSlide = 0;
    }
  }

}
