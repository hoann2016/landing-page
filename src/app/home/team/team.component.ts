import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit{
    
    // DomSanitizer for safe html content.
    constructor(private _sanitizer:DomSanitizer,private translate: TranslateService,
      private landingPageService: LandingPageService) { }
    ngOnInit(): void {
      this.landingPageService.getLangSelected().subscribe(lang=>
        {        
          this.translate.use(lang);
        })
    }
    // Team Carousel
    public team = [{
        image: 'assets/images/avtar/1.jpg',
        name: 'mark jkcno',
        designation: 'designer',
        social: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>'),
      }, {
        image: 'assets/images/avtar/15.jpg',
        name: 'john doe',
        designation: 'devloper',
        social: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>'),
      }, {
        image: 'assets/images/avtar/22.jpg',
        name: 'johanson let',
        designation: 'ux designer',
        social: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>'),
      }, {
        image: 'assets/images/avtar/1.jpg',
        name: 'mark jkcno',
        designation: 'designer',
        social: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>'),
      }, {
        image: 'assets/images/avtar/15.jpg',
        name: 'john doe',
        designation: 'devloper',
        social: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>'),
      }, {
        image: 'assets/images/avtar/22.jpg',
        name: 'johanson let',
        designation: 'ux designer',
        social: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>'),
      }, {
        image: 'assets/images/avtar/1.jpg',
        name: 'mark jkcno',
        designation: 'designer',
        social: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>'),
      }, {
        image: 'assets/images/avtar/15.jpg',
        name: 'john doe',
        designation: 'devloper',
        social: this._sanitizer.bypassSecurityTrustHtml('<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>'),
    }]


    // Team Carousel Options
	public teamCarousel: any ={
	    loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                margin:5,
            },
            600:{
                items:1,
                margin:5,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
	}

}
