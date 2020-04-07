import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutes } from './features.routing';
import { FeaturesComponent } from './features.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbAccordionModule, NgbDatepickerModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoBookingComponent } from './demo-booking/demo-booking.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Step1Component } from './booking-steps/step1/step1.component';
import { Step2Component } from './booking-steps/step2/step2.component';
import { Step3Component } from './booking-steps/step3/step3.component';
import { Step4Component } from './booking-steps/step4/step4.component';
import { Step5Component } from './booking-steps/step5/step5.component';
import { StepService } from './services/step.service';
import { SharedModule } from '@shared/shared.module';
import { FeatureHeaderComponent } from './components/feature-header/feature-header.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { NgbDateCustomParserFormatter } from './formaters/ngb-datepicker.formater';

@NgModule({
    declarations: [
        FeaturesComponent,
        DemoBookingComponent,
        Step1Component,
        Step2Component,
        Step3Component,
        Step4Component,
        Step5Component,
        FeatureHeaderComponent,
        CalendarViewComponent
    ],
    imports: [
        CommonModule,
        FeaturesRoutes,
        FormsModule,
        ReactiveFormsModule,
        NgbAccordionModule,
        NgbDatepickerModule,
        TranslateModule,
        FontAwesomeModule,
        SharedModule
    ],
    providers: [
        StepService,
        {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
    ],
    entryComponents: [DemoBookingComponent]
})
export class FeaturesModule { }
