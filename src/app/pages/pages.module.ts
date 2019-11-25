import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule, TranslateService, MissingTranslationHandler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { LandingPageService } from '../shared/services/landing-page.service';
import { SharedModule } from '../shared/shared.module';
import { DownloadComponent } from './download/download.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FaqComponent } from './faq/faq.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ReviewComponent } from './review/review.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermOfServiceComponent } from './term-of-service/term-of-service.component';
import { PaymentComponent } from './payment/payment.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { CloneSiteComponent } from './clone-site/clone-site.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule, 
    PagesRoutingModule, 
    SharedModule, 
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule, 
    NgbModule,
    TranslateModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "maxPercent": 100,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4b8dd2",
      "outerStrokeGradientStopColor": "#98bee6",
      "innerStrokeColor": "#72c4e5",
      "innerStrokeWidth": 5,
      "showSubtitle": false,
      "showBackground": false,
      "responsive": true
    })
  ],
  declarations: [
    SignUpComponent, 
    ForgetPasswordComponent, 
    ThankYouComponent,
    ReviewComponent, 
    ErrorPageComponent, 
    FaqComponent, 
    DownloadComponent,
    EmailTemplateComponent, 
    PaymentComponent,
    SignInComponent,
    PrivacyPolicyComponent,
    TermOfServiceComponent,
    CloneSiteComponent
  ],
  entryComponents: [LoadingComponent],
  providers: [TranslateService, LandingPageService]
})
export class PagesModule {
}
