// angular
import { APP_INITIALIZER, NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// libs
import { TransferHttpCacheModule } from '@nguniversal/common';
// shared
import { SharedModule } from '@shared/shared.module';
// components
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
// interceptors
import { AppService } from './app.service';
import { GlobalErrorHandlerService } from './shared/error-handler/global-error-handler.service';
import { HandlingFormValidatorService } from './shared/services/handling-form-validator.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { MyMissingTranslationHandler } from './shared/services/translation-handler/translation-handler';
import { NotTranslatedService } from './shared/services/translation-handler/not-translated-service';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/////
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutes,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      enableHtml:true
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },      
        missingTranslationHandler: {
            provide: MissingTranslationHandler,
            useClass: MyMissingTranslationHandler,
            deps: [NotTranslatedService]
        }
    }),
    NgbModule
  ],
  declarations: [AppComponent],
  providers: [
    // Guards TODO
    // AuthGuard,
    // UnAuthGuard,
    // TODO Interceptors
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AppService, 
    GlobalErrorHandlerService,
    HandlingFormValidatorService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }, 
  ],
})
export class AppModule {
}
