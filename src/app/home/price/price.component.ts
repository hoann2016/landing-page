import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit{
    
    // DomSanitizer for safe html content.
    constructor(private _sanitizer:DomSanitizer,private translate: TranslateService,
        private landingPageService: LandingPageService) { }

    // Pricing Carousel
    public price = [{
        type: 'basic',
        title: 'Only the basic features',
        price: '$50',
        duration: 'per year',
        feature: this._sanitizer.bypassSecurityTrustHtml('<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>'),
      }, {
        type: 'Standard',
        title: 'Take it to the next level',
        price: '$100',
        duration: 'per year',
        feature: this._sanitizer.bypassSecurityTrustHtml('<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>'),
      }, {
        type: 'Custom',
        title: 'Our biggest plan',
        price: '$150',
        duration: 'per year',
        feature: this._sanitizer.bypassSecurityTrustHtml('<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>'),
    }]
    ngOnInit(): void {
        this.landingPageService.getLangSelected().subscribe(lang=>
            {        
              this.translate.use(lang);
            })  
    }

    // Pricing Carousel Options
	public pricingCarousel: any ={
	    loop:true,
        margin:30,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
                dots:true,
                margin:0
            },
            600:{
                items:1,
                dots:true,
                margin:0,
            },
            768:{
                items:2,
                dots:true,
            },
            992:{
                items:3,
            },
            1000:{
                items:3
            }
        }
	}

}
