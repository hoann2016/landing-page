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

  newbiePackage: Array<any>;
  selectedNewbie: any;
  biggiePackage: Array<any>;
  selectedBiggie: any;
  hulkPackage: Array<any>;
  selectedHulk: any;

  constructor(private landingPageSrv: LandingPageService,
              private router: Router) {
    this.selectedNewbie = {};
    this.selectedBiggie = {};
    this.selectedHulk = {};
  }

  ngOnInit(): void {
    this.newbiePackage = [
      {id: 1, name: '6 Months', price: 100, discount: null},
      {id: 2, name: '12 Months', price: 199, discount: 1},
      {id: 3, name: '18 Months', price: 429, discount: 2},
      {id: 4, name: '24 Months', price: 799, discount: 3},
    ];
    this.biggiePackage = [
      {id: 1, name: '6 Months', price: 100, discount: null},
      {id: 2, name: '12 Months', price: 199, discount: 1},
      {id: 3, name: '18 Months', price: 429, discount: 2},
      {id: 4, name: '24 Months', price: 799, discount: 3},
    ];
    this.hulkPackage = [
      {id: 1, name: '6 Months', price: 100, discount: null},
      {id: 2, name: '12 Months', price: 199, discount: 1},
      {id: 3, name: '18 Months', price: 429, discount: 2},
      {id: 4, name: '24 Months', price: 799, discount: 3},
    ];
    this.selectedNewbie = this.newbiePackage[0];
    this.selectedBiggie = this.biggiePackage[0];
    this.selectedHulk = this.hulkPackage[0];
  }
  changeNewbiePackage(item: any) {
    console.log(item);
  }

  redirectToRegister(packageSelected: string): void {
    this.landingPageSrv.selectPackage(packageSelected);
    this.router.navigate(['/pages/sign-up']);
  }
}
