import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from '../../shared/services/landing-page.service';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private translate: TranslateService,
    private landingPageService: LandingPageService) { }

  ngOnInit() {
    this.landingPageService.getLangSelected().subscribe(lang=>
      {        
        this.translate.use(lang);
      })
  }

}
