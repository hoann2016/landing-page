import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutes } from './features.routing';
import { FeaturesComponent } from './features.component';
import { TranslateModule } from '@ngx-translate/core';
import {NgbAccordionModule, NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    FeaturesRoutes,
    FormsModule,
    ReactiveFormsModule,
    NgbAccordionModule,
    NgbDatepickerModule,
    TranslateModule
  ]
})
export class FeaturesModule {}
