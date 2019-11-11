import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from '../../shared/services/landing-page.service';
// declare var $: any;

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss']
})
export class ComingsoonComponent implements OnInit {

  constructor(private translate: TranslateService,
    private landingPageService: LandingPageService) { }

  ngOnInit() {
      // $.getScript('./assets/js/timer.js');
      // this.landingPageService.getLangSelected().subscribe(lang=>
      //   {        
      //     this.translate.use(lang);
      //   })
  }

}
