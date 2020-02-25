import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LandingPageService } from '../shared/services/landing-page.service';
import { ToastrService } from 'ngx-toastr';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
    faAngleDown = faAngleDown;
    faAngleRight = faAngleRight;
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
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            }
        },
    };

    newbiePackage: Array<any>;
    selectedNewbie: any;
    biggiePackage: Array<any>;
    selectedBiggie: any;
    hulkPackage: Array<any>;
    selectedHulk: any;
    selectAnswer: number;

    constructor(private toastrService: ToastrService,
        private landingPageSrv: LandingPageService,
        private router: Router) {
        this.selectedNewbie = {};
        this.selectedBiggie = {};
        this.selectedHulk = {};
    }

    ngOnInit(): void {
        this.landingPageSrv.setActivePage('pricing');
        this.newbiePackage = [
            { id: 1, name: 'Pricing.MainContent.6Months', price: '2208000', discount: null },
            { id: 2, name: 'Pricing.MainContent.12Months', price: '4416000', discount: 1 },
            { id: 3, name: 'Pricing.MainContent.18Months', price: '6624000', discount: 2 },
            { id: 4, name: 'Pricing.MainContent.24Months', price: '8832000', discount: 3 },
        ];
        this.biggiePackage = [
            { id: 1, name: 'Pricing.MainContent.6Months', price: '4496000', discount: null },
            { id: 2, name: 'Pricing.MainContent.12Months', price: '9936000', discount: 1 },
            { id: 3, name: 'Pricing.MainContent.18Months', price: '14904000', discount: 2 },
            { id: 4, name: 'Pricing.MainContent.24Months', price: '19872000', discount: 3 },
        ];
        this.hulkPackage = [
            { id: 1, name: 'Pricing.MainContent.6Months', price: '8856000', discount: null },
            { id: 2, name: 'Pricing.MainContent.12Months', price: '17112000', discount: 1 },
            { id: 3, name: 'Pricing.MainContent.18Months', price: '25668000', discount: 2 },
            { id: 4, name: 'Pricing.MainContent.24Months', price: '34224000', discount: 3 },
        ];
        this.selectedNewbie = this.newbiePackage[0];
        this.selectedBiggie = this.biggiePackage[0];
        this.selectedHulk = this.hulkPackage[0];
    }

    redirectToRegister(packageSelected: string): void {
        this.landingPageSrv.selectPackage(packageSelected);
        this.router.navigate(['/pages/sign-up']);
    }

    openAnswer(order: number) {
        if (!order || (this.selectAnswer === order)) {
            this.selectAnswer = 0;
        } else {
            this.selectAnswer = order ? order : 1;
        }
    }
}
