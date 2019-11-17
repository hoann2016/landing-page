import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent {
  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    margin: 22,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
        autoWidth: false,
      },
      740: {
        items: 1,
        autoWidth: false,
      },
      1200: {
        items: 3
      }
    },
  };
  constructor() {
  }
}
