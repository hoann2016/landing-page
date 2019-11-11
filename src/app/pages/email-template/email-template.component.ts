import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from '../../shared/services/landing-page.service';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss']
})
export class EmailTemplateComponent implements OnInit {

  constructor(private translate: TranslateService,
    private landingPageService: LandingPageService) { }

  ngOnInit() {
    this.landingPageService.getLangSelected().subscribe(lang=>
      {        
        this.translate.use(lang);
      })
  }

}
