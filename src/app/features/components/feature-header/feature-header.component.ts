import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { StepService } from 'app/features/services/step.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-feature-header',
    templateUrl: './feature-header.component.html',
    styleUrls: ['./feature-header.component.scss'],
})
export class FeatureHeaderComponent implements OnInit {
    currentStep$: Observable<number>;
    @ViewChild('calendar', { static: true }) calendarEl: ElementRef<HTMLElement>;

    constructor(
        private stepService: StepService,
        private modalService: NgbModal
    ) {
    }

    ngOnInit() {
        this.currentStep$ = this.stepService.currentStep$;
    }

    openDemoPopup(content): void {
        this.modalService.open(content, { centered: true, windowClass: 'demo-booking-popup' });
    }

    createNewTicketTestBooking(event: any): void {
        if (event) {
            this.stepService.dispatchCreateNewTicketBooking(true);            
        }
    }

    bookingIsCreated(event: boolean): void {
        if (event) {
            this.calendarEl.nativeElement.scrollIntoView();
            this.stepService.changeStep(1);
            this.stepService.dispatchCreateNewTicketBooking(false);
            this.stepService.setDataStep({}, true);
            this.modalService.dismissAll();
        }
    }
}
