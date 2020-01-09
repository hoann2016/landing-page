import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LandingPageService } from '../../shared/services/landing-page.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isEmpty} from 'lodash';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private landingPageService: LandingPageService,
    private route: ActivatedRoute,
    ) { }

  state$: Observable<object>;
  orderResponse;

  ngOnInit() {
    this.state$ = this.route.paramMap
      .pipe(     
        map(() =>
          window.history.state
        )
      )
    this.state$.subscribe((p: any) => {
      if (!isEmpty(p) && p.name) {
        this.orderResponse = p;
        this.orderResponse.orderStatus = this.translate.instant(`Thankyou.${this.orderResponse.orderStatus}`);
        this.orderResponse.userStatus = this.translate.instant(`Thankyou.${this.orderResponse.userStatus}`);
        sessionStorage.setItem('orderResponse', JSON.stringify(this.orderResponse));
      } else {
        const orderResponse = sessionStorage.getItem('orderResponse');
        this.orderResponse = JSON.parse(orderResponse)
      }
    });
    
  }

}
