// angular
import { APP_INITIALIZER, NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// libs
import { TransferHttpCacheModule } from '@nguniversal/common';
import { CookieService, CookieModule } from '@gorniv/ngx-universal';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// shared
import { SharedModule } from '@shared/shared.module';
import { TranslatesService } from '@shared/translates';
import { SharedMetaModule } from '@shared/shared-meta';
import { UniversalStorage } from '@shared/storage/universal.storage';
// components
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
// interceptors
import { AppService } from './app.service';
import { GlobalErrorHandlerService } from './shared/error-handler/global-error-handler.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/////

export function initLanguage(translateService: TranslatesService): Function {
  return (): Promise<any> => translateService.initLanguage();
}

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
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    CookieModule.forRoot(),
    SharedModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      enableHtml: true
    }),
    SharedMetaModule,
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
    { provide: APP_INITIALIZER, useFactory: initLanguage, multi: true, deps: [TranslatesService] },
    CookieService,
    UniversalStorage,
    AppService, 
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService }, 
  ],
})
export class AppModule {
}
