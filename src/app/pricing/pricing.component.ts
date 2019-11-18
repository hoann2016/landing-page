import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LandingPageService } from '../shared/services/landing-page.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
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
  constructor(private landingPageSrv: LandingPageService,
              private router: Router) {
  }

  ngOnInit(): void {}

  redirectToRegister(packageSelected: string): void {
    this.landingPageSrv.selectPackage(packageSelected);
    this.router.navigate(['/pages/sign-up']);
  }
}
