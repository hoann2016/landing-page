import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingRoutes } from './pricing.routing';
import { PricingComponent } from './pricing.component';
import { TranslateModule } from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PricingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PricingRoutes,
    CarouselModule,
    TranslateModule,
    FontAwesomeModule
  ]
})
export class PricingModule {}
