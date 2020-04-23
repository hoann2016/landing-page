import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutes } from './features.routing';
import { FeaturesComponent } from './features.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgbAccordionModule, NgbDatepickerModule, NgbDateParserFormatter, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
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
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SalonBookingDemoComponent } from './components/salon-booking-demo/salon-booking-demo.component';
import { YogaBookingDemoComponent } from './components/yoga-booking-demo/yoga-booking-demo.component';
import { YogaStep1Component } from './components/yoga-booking-demo/yoga-step1/yoga-step1.component';
import { YogaStep2Component } from './components/yoga-booking-demo/yoga-step2/yoga-step2.component';

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
        CalendarViewComponent,
        SalonBookingDemoComponent,
        YogaBookingDemoComponent,
        YogaStep1Component,
        YogaStep2Component
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
        SharedModule,
        NgbDropdownModule,
        NgbPopoverModule
    ],
    providers: [
        StepService,
        {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
    ],
    entryComponents: [DemoBookingComponent, SalonBookingDemoComponent, YogaBookingDemoComponent]
})
export class FeaturesModule { }
