import { Component, OnInit, TemplateRef, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { StepService } from 'app/features/services/step.service';
import { YogaBookingService } from './services/yoga-booking.service';

@Component({
    selector: 'app-yoga-booking-demo',
    templateUrl: './yoga-booking-demo.component.html',
    styleUrls: ['./yoga-booking-demo.component.scss'],
    providers: [YogaBookingService]
})
export class YogaBookingDemoComponent implements OnInit {
    currentStep$: Observable<number>;
    @Output('bookingIsCreated') bookingIsCreated: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private yogaBookingService: YogaBookingService
    ) { }

    ngOnInit() {
        this.currentStep$ = this.yogaBookingService.yogaBookingStep$;
    }

    bookingIsCreatedEvent(event: any): void {
        this.bookingIsCreated.emit(event);
    }
}
