import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {OwlModule} from 'ngx-owl-carousel';

import {LandingPageService} from '../shared/services/landing-page.service';
import {SharedModule} from '../shared/shared.module';
import {AboutComponent} from './about/about.component';
import {BlogComponent} from './blog/blog.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FeatureComponent} from './feature/feature.component';
import {HomeRoutingModule} from './home-routing.module';
import {IntroOneComponent} from './intro-one/intro-one.component';
import {IntroThreeComponent} from './intro-three/intro-three.component';
import {IntroTwoComponent} from './intro-two/intro-two.component';
import {NewsletterComponent} from './newsletter/newsletter.component';
import {PriceComponent} from './price/price.component';
import {ScreenshotComponent} from './screenshot/screenshot.component';
import {TeamComponent} from './team/team.component';
import {TestimonialComponent} from './testimonial/testimonial.component';
import {HomeTwoComponent} from './versions/home-two/home-two.component';
import { LoadingComponent } from '../shared/loading/loading.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule,
    FormsModule, OwlModule, NgbModule, HttpClientModule,
    TranslateModule
  ],
  declarations: [
    HomeTwoComponent, IntroOneComponent, IntroTwoComponent, IntroThreeComponent,
    AboutComponent, FeatureComponent, ScreenshotComponent, TeamComponent,
    BlogComponent, PriceComponent, TestimonialComponent, ContactUsComponent,
    NewsletterComponent

  ],
  entryComponents:[LoadingComponent],
  providers: [TranslateService, LandingPageService,]
})
export class HomeModule {
}
