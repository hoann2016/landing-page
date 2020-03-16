import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { isEmpty} from 'lodash';
import { map } from 'rxjs/operators';
import { CloneSiteService } from '../../shared/services/clone-site.service';
import { CloneSite } from '../../shared/models/cloneSite.models';
import { AppService } from '../../app.service';
import { UserLogin } from '../../shared/models/user-models/user-login.model';
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
    private cloneSiteService: CloneSiteService,
    private userService: AppService,
    ) { }
  state$: Observable<object>;
  merchantId: string;
  userCredentials: UserLogin;
  showLoading: boolean = false;
  countDown(redirectTime) {
    if(redirectTime > 0){
      this.cloneSiteProgress.percent += 1;
      this.cloneSiteProgress.message = this.translate.instant('CloneSite.preparing-merchant-site');
      redirectTime -= 1;
      setTimeout(() => this.countDown(redirectTime), 1000);
    } else {
      this.showLoading = true;
      this.cloneSiteProgress.message = this.translate.instant('CloneSite.redirect-message');
      this.userService.logIn(this.userCredentials).subscribe(response => {
        const { success, data } = response;
        this.showLoading = false;
        if (success === true && data.sessionId && data.domain) {
          window.location.href = `${environment.rootproto}${data.domain}/pages/sign-in?session=${data.sessionId}`;
        } else {
          window.location.href = `${environment.rootproto}${this.cloneSiteProgress.domain}/pages/sign-in`;
        }
      });
    }
  }
  ngOnInit() {
    this.cloneSiteProgress = { message: this.translate.instant('CloneSite.connecting'), percent: 100,  domain: null};
    this.state$ = this.route.paramMap
    .pipe(     
      map(() =>
        window.history.state
      )
    )
    this.state$.subscribe((p: any) => {
      if (!isEmpty(p)) {
        this.merchantId = p.merchantId;
        this.userCredentials = p.userCredentials;
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
        if(this.cloneSiteProgress && this.cloneSiteProgress.percent === 80 && this.cloneSiteProgress.domain) {
          this.countDown(environment.redirectTime);
        }
    });
  }
  ngOnDestroy() {
    this._progress.unsubscribe();
  }
}
