import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CloneSiteService } from '../../shared/services/clone-site.service';
import { CloneSite } from '../../shared/models/cloneSite.models';
import { isEmpty} from 'lodash';
import { environment } from '../../../environments/environment';

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
    private route: ActivatedRoute,
    private cloneSiteService: CloneSiteService
    ) { }
  state$: Observable<object>;
  merchantId: string;
  countDown(redirectTime) {
    if(redirectTime > 0){
      const message = this.translate.instant('CloneSite.redirect-message');
      this.cloneSiteProgress.message = message.replace(/%s/g, redirectTime);
      redirectTime -= 1;
      setTimeout(() => this.countDown(redirectTime), 1000);
    } else {
      window.location.href = `${environment.rootproto}${this.cloneSiteProgress.domain}`;
    }
  }
  ngOnInit() {
    this.cloneSiteProgress = { message: this.translate.instant('CloneSite.connecting'), percent: 0,  domain: null};
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
        this.cloneSiteProgress = {
          message: this.translate.instant(`CloneSite.${cloneSiteProgress.message}`),
          percent: cloneSiteProgress.percent,
          domain: cloneSiteProgress.domain
        };
        if(this.cloneSiteProgress && this.cloneSiteProgress.percent === 100 && this.cloneSiteProgress.domain) {
          const redirectTime = 10;
          this.countDown(redirectTime);
        }
    });
  }
  ngOnDestroy() {
    this._progress.unsubscribe();
  }
}
