import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from '../../shared/services/landing-page.service';
// declare var $: any;

@Component({
  selector: 'app-intro-three',
  templateUrl: './intro-three.component.html',
  styleUrls: ['./intro-three.component.scss']
})
export class IntroThreeComponent implements AfterViewInit,OnInit {

  @ViewChild('video',{static:true}) videoElement: ElementRef;	
  
  constructor(private translate: TranslateService,
  private landingPageService: LandingPageService) {

    }
    ngOnInit(): void {}
  // Magnific Popup
  ngAfterViewInit(): void {
  	// $(this.videoElement.nativeElement).magnificPopup({ 
		//     disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false 
    // });
  }

}
