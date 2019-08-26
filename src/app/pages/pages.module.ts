import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {LandingPageService} from '../shared/services/landing-page.service';
import {SharedModule} from '../shared/shared.module';
import {SignInComponent} from '../shared/sign-in/sign-in.component';

import {ComingsoonComponent} from './comingsoon/comingsoon.component';
import {DownloadComponent} from './download/download.component';
import {EmailTemplateComponent} from './email-template/email-template.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {FaqComponent} from './faq/faq.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {PagesRoutingModule} from './pages-routing.module';
import {ReviewComponent} from './review/review.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ThankYouComponent} from './thank-you/thank-you.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule, PagesRoutingModule, SharedModule, FormsModule,
    ReactiveFormsModule, HttpClientModule, NgbModule, TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [
    SignUpComponent, ForgetPasswordComponent, ThankYouComponent,
    ReviewComponent, ErrorPageComponent, FaqComponent, DownloadComponent,
    ComingsoonComponent, EmailTemplateComponent
  ],
  providers: [TranslateService, LandingPageService]
})
export class PagesModule {
}
