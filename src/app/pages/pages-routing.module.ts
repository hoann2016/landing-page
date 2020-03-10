import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ReviewComponent } from './review/review.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FaqComponent } from './faq/faq.component';
import { DownloadComponent } from './download/download.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { PaymentComponent } from './payment/payment.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermOfServiceComponent } from './term-of-service/term-of-service.component';
import { CloneSiteComponent } from './clone-site/clone-site.component'
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sign-up',
        component: SignUpComponent,
      }, 
      {
        path: 'sign-in',
        component: SignInComponent,
      }, 
      {
        path: 'forget-password',
        component: ForgetPasswordComponent,
      }, 
      {
        path: 'thank-you',
        component: ThankYouComponent,
      }, 
      {
        path: 'review',
        component: ReviewComponent,
      },
      {
        path: '404',
        component: ErrorPageComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'download',
        component: DownloadComponent,
      },
      {
        path: 'email-template',
        component: EmailTemplateComponent,
      },
      {
        path:'payment',
        component:PaymentComponent
      },
      {
        path:'privacy-policy',
        component:PrivacyPolicyComponent
      },
      {
        path:'term-of-service',
        component:TermOfServiceComponent
      },
      {
        path: 'clone-site',
        component: CloneSiteComponent
      },
      {
          path: 'reset-password',
          component: ResetPasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
