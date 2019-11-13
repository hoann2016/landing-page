import { Component, OnInit, OnDestroy } from '@angular/core';
import { LandingFixService } from '../../../shared/services/landing-fix.service';
import { LandingPageService } from '../../../shared/services/landing-page.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit, OnDestroy {

  constructor(private fix: LandingFixService,private translate: TranslateService,
    private landingPageService: LandingPageService) { }

  ngOnInit() {
    this.fix.addFixTwo();
  }

  ngOnDestroy() {
    this.fix.removeFixTwo();
  }

}
