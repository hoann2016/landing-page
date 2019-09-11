import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import * as $ from 'jquery';
import { AppService } from './app.service';
import { TranslateModule, TranslateLoader, MissingTranslationHandler } from '@ngx-translate/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MyMissingTranslationHandler } from './shared/services/translation-handler/translation-handler';
import { NotTranslatedService } from './shared/services/translation-handler/not-translated-service';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent
  ],  
  exports:[],
  imports: [
    
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,    
    SharedModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
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
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      enableHtml:true
    }),
    NgbModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
