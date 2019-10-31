import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from 'src/app/shared/services/landing-page.service';
import { FontAwesomeModule } from 'font-awesome';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor(private translate: TranslateService,
    private landingPageService: LandingPageService) { }

  ngOnInit() {
    this.landingPageService.getLangSelected().subscribe(lang=>
      {        
        this.translate.use(lang);
      })
  }

}
