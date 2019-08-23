import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import 'magnific-popup';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';
declare var $: any;

@Component({
  selector: 'app-intro-two',
  templateUrl: './intro-two.component.html',
  styleUrls: ['./intro-two.component.scss']
})
export class IntroTwoComponent implements AfterViewInit,OnInit {

  @ViewChild('video') videoElement: ElementRef;	
  
  constructor(private translate: TranslateService,
    private landingPageService: LandingPageService) { }
  ngOnInit(): void {
    this.landingPageService.getLangSelected().subscribe(lang=>
      {        
        this.translate.use(lang);
      })
  }

  // Magnific Popup 
  ngAfterViewInit(): void {
  	$(this.videoElement.nativeElement).magnificPopup({ 
		    disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false 
    });
  }

}
