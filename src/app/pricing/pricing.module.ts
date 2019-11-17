import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingRoutes } from './pricing.routing';
import { PricingComponent } from './pricing.component';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [PricingComponent],
  imports: [
    CommonModule,
    PricingRoutes,
    CarouselModule,
    TranslateModule
  ]
})
export class PricingModule {}
