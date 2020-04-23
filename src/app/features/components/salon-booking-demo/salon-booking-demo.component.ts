import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StepService } from 'app/features/services/step.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-salon-booking-demo',
    templateUrl: './salon-booking-demo.component.html',
    styleUrls: ['./salon-booking-demo.component.scss']
})
export class SalonBookingDemoComponent implements OnInit {
    currentStep$: Observable<number>;
    @Output('bookingIsCreated') bookingIsCreated: EventEmitter<any> = new EventEmitter<any>();
    
    constructor(
        private stepService: StepService
    ) { }

    ngOnInit() {
        this.currentStep$ = this.stepService.currentStep$;
    }

    createNewTicketTestBooking(event: any): void {
        this.bookingIsCreated.emit(event);
    }
}
