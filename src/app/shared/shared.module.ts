import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxPageScrollModule} from 'ngx-page-scroll';

import {LandingFixService} from '../shared/services/landing-fix.service';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {LandingPageService} from './services/landing-page.service';
// Services
import {WINDOW_PROVIDERS} from './services/windows.service';
import {SignInComponent} from './sign-in/sign-in.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  exports: [
    CommonModule, HeaderComponent, FooterComponent, SignInComponent

  ],
  imports: [
    CommonModule, RouterModule, NgxPageScrollModule, NgbModule, FormsModule,
    ReactiveFormsModule, HttpClientModule, TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  declarations: [HeaderComponent, FooterComponent, SignInComponent],
  providers: [
    WINDOW_PROVIDERS, LandingFixService, TranslateService, LandingPageService
  ]
})
export class SharedModule {
}
