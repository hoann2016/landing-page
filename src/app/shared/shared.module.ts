import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule, TranslateService, MissingTranslationHandler} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxPageScrollModule} from 'ngx-page-scroll';

import {LandingFixService} from '../shared/services/landing-fix.service';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {LandingPageService} from './services/landing-page.service';
// Services
import {WINDOW_PROVIDERS} from './services/windows.service';
import {SignInComponent} from './sign-in/sign-in.component';
import { MyMissingTranslationHandler } from './services/translation-handler/translation-handler';
import { NotTranslatedService } from './services/translation-handler/not-translated-service';

@NgModule({
  exports: [
    CommonModule, HeaderComponent, FooterComponent, SignInComponent,TranslateModule

  ],
  imports: [
    CommonModule, RouterModule, NgxPageScrollModule, NgbModule, FormsModule,
    ReactiveFormsModule, HttpClientModule, TranslateModule

  ],
  declarations: [HeaderComponent, FooterComponent, SignInComponent],
  providers: [
    WINDOW_PROVIDERS, LandingFixService , LandingPageService
  ]
})
export class SharedModule {
}
