import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent implements OnInit {
    
    constructor(private translate: TranslateService,
		private landingPageService: LandingPageService,private router: Router) { }
    
    // Carousel Images  
	public carouselImages = [{
	    image: 'assets/images/app/1.jpg',
	  }, {
	    image: 'assets/images/app/2.jpg',
	  }, {
	    image: 'assets/images/app/3.jpg',
	  }, {
	    image: 'assets/images/app/4.jpg',
	  }, {
	    image: 'assets/images/app/5.jpg',
	  }, {
	    image: 'assets/images/app/6.jpg',
      }, {
	    image: 'assets/images/app/7.jpg',
	  }, {
	    image: 'assets/images/app/8.jpg',
	  }, {
	    image: 'assets/images/app/9.jpg',
	  }, {
	    image: 'assets/images/app/10.jpg',
	  }, {
	    image: 'assets/images/app/11.jpg',
	  }, {
	    image: 'assets/images/app/12.jpg',
    }]
	ngOnInit(): void {
		this.landingPageService.getLangSelected().subscribe(lang=>
			{        
			  this.translate.use(lang);
			})
	}
	RedirectToRegister()
  {
    
    this.router.navigate(['/pages/sign-up']);
  }
	// Carousel Options
	public carouselOptions: any ={
	    loop:true,
	    margin:30,
	    nav:false,
	    dots:false,
	    center:true,
	    autoplay: true,
	    autoplayTimeout: 8000,
	    responsive:{
	        0:{
	            items:2,
	        },
	        767:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        992:{
	            items:4,
	        },
	        1200:{
	            items:5
	        }
	    }
	}


}
