import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { LandingPageService } from '../../shared/services/landing-page.service';
import { CloneSiteService } from '../../shared/services/clone-site.service';
import { CloneSite } from '../../shared/models/cloneSite.models';
import { isEmpty} from 'lodash';

@Component({
  selector: 'clone-site',
  templateUrl: './clone-site.component.html',
  styleUrls: ['./clone-site.component.scss']
})
export class CloneSiteComponent implements OnInit {
  cloneSiteProgress: CloneSite;
  _progress: Subscription
  constructor(
    private translate: TranslateService,
    private landingPageService: LandingPageService,
    private route: ActivatedRoute,
    private cloneSiteService: CloneSiteService
    ) { }
  state$: Observable<object>;
  merchantId: string;
  ngOnInit() {
    this.cloneSiteProgress = { message: 'connecting', percent: 0,  domain: null};
    this.state$ = this.route.paramMap
    .pipe(     
      map(() =>
        window.history.state
      )
    )
    this.state$.subscribe((p: any) => {
      if (!isEmpty(p)) {
        this.merchantId = p.merchantId;
        this.cloneSiteService.ready(this.merchantId);
      }
    });
    this._progress = this.cloneSiteService.cloneSiteProgress
    .pipe()
    .subscribe(cloneSiteProgress => {
        this.cloneSiteProgress = cloneSiteProgress;
        if(this.cloneSiteProgress && this.cloneSiteProgress.percent === 100 && this.cloneSiteProgress.domain) {
          setTimeout(()=> {
            window.location.href = this.cloneSiteProgress.domain;
          }, 5000);
        }
    });
  }
  ngOnDestroy() {
    this._progress.unsubscribe();
  }
}
