import { ModuleWithProviders, NgModule, ErrorHandler } from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule, TranslateService, MissingTranslationHandler} from '@ngx-translate/core';
import {NgxPageScrollModule} from 'ngx-page-scroll';

import {LandingFixService} from '../shared/services/landing-fix.service';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {LandingPageService} from './services/landing-page.service';
// Services
import {WINDOW_PROVIDERS} from './services/windows.service';
import {GlobalErrorHandlerService } from './error-handler/global-error-handler.service';
import { UniversalStorage } from '@shared/storage/universal.storage';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  exports: [ 
    CommonModule, 
    HeaderComponent, 
    FooterComponent, 
    TranslateModule, 
    LoadingComponent, 
  ],
  imports: [
    CommonModule, RouterModule, NgxPageScrollModule, NgbModule, FormsModule,
    ReactiveFormsModule, HttpClientModule, TranslateModule
  ],
  declarations: [HeaderComponent, FooterComponent, LoadingComponent ],
  providers: [WINDOW_PROVIDERS, LandingFixService , LandingPageService, GlobalErrorHandlerService, UniversalStorage]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
