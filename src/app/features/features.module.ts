import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutes } from './features.routing';
import { FeaturesComponent } from './features.component';
import { TranslateModule } from '@ngx-translate/core';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    FeaturesRoutes,
    NgbAccordionModule,
    TranslateModule
  ]
})
export class FeaturesModule {}
