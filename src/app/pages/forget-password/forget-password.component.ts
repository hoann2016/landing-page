import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from '../../shared/services/landing-page.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

   // variable
  show: boolean;

  constructor(private translate: TranslateService,
    private landingPageService: LandingPageService) {
  // initialize variable value
   this.show = false;
  }
  
  // click event function toggle
  password() {
   this.show = !this.show;
  }
  
  ngOnInit() {
    this.landingPageService.getLangSelected().subscribe(lang=>
      {        
        this.translate.use(lang);
      })
  }

}
