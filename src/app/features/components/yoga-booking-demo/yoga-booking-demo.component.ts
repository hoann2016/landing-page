import { Component, OnInit, TemplateRef, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { StepService } from 'app/features/services/step.service';

@Component({
    selector: 'app-yoga-booking-demo',
    templateUrl: './yoga-booking-demo.component.html',
    styleUrls: ['./yoga-booking-demo.component.scss']
})
export class YogaBookingDemoComponent implements OnInit {
    currentStep$: Observable<number>;
    @Output('bookingIsCreated') bookingIsCreated: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private stepService: StepService
    ) { }

    ngOnInit() {
        this.currentStep$ = this.stepService.currentStep$;
    }
}
