import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Services
import { WINDOW_PROVIDERS } from "./services/windows.service";
import { LandingFixService } from '../shared/services/landing-fix.service';
import { SignInComponent } from '../home/sign-in/sign-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPageScrollModule,
    NgbModule,FormsModule, ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  })
    
  ],
  declarations: [
    HeaderComponent,
    FooterComponent ,
    SignInComponent
  ],
  providers: [
    WINDOW_PROVIDERS,
    LandingFixService,
    TranslateService
  ]
})
export class SharedModule { }
