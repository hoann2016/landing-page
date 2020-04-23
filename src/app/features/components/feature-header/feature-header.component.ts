import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StepService } from 'app/features/services/step.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { faCaretDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SalonBookingDemoComponent } from '../salon-booking-demo/salon-booking-demo.component';
import { YogaBookingDemoComponent } from '../yoga-booking-demo/yoga-booking-demo.component';

@Component({
    selector: 'app-feature-header',
    templateUrl: './feature-header.component.html',
    styleUrls: ['./feature-header.component.scss'],
})
export class FeatureHeaderComponent implements OnInit {
    icons: {[key: string]: IconDefinition} = {
        caretDown: faCaretDown
    };
    activeSolution: number = 0;
    bookingSolutions: Array<{title: string, value: string, componnent: any}> = [
        {
            title: 'Create a Test Booking For Salon',
            value: 'salon',
            componnent: SalonBookingDemoComponent
        },
        {
            title: 'Create a Test Booking For Yoga',
            value: 'yoga',
            componnent: YogaBookingDemoComponent
        }
    ];

    stateHeaders: { [key: string]: boolean } = {
        chooseSolution: false,
        isJumping: true
    };
    private _subscription: Subscription;
    @ViewChild('bookingOption', { static: false }) bookingOptionRef: ElementRef;

    constructor(
        private stepService: StepService,
        private modalService: NgbModal
    ) {
    }

    ngOnInit() {
    }
    
    @HostListener('document:click', ['$event'])
    clickOutSide(event) {
        if(!this.bookingOptionRef.nativeElement.contains(event.target)) {
            this.openChooseSolution(true);
        }
    }

    openDemoPopup(content): void {
        // this.modalService.open(content, { centered: true, windowClass: 'demo-booking-popup' });
    }

    createNewTicketTestBooking(event: any): void {
        if (event) {
            this.stepService.dispatchCreateNewTicketBooking(true);
            if (this._subscription) this._subscription.unsubscribe();
        }
    }

    bookingIsCreated(event: boolean): void {
        if (event) {
            this.stepService.changeStep(1);
            this.stepService.dispatchCreateNewTicketBooking(false);
            this.stepService.setDataStep({}, true);
            this.modalService.dismissAll();
        }
    }

    chooseTypeSolution(index: number): void {
        if (this.activeSolution !== index) {
            this.stepService.changeStep(1);
            this.stepService.dispatchCreateNewTicketBooking(false);
            this.stepService.setDataStep({}, true);
            this.modalService.dismissAll();
            this.activeSolution = index;
        }
    }

    openChooseSolution(outSide: boolean = false): void {
        if (outSide) {
            this.stateHeaders.isJumping = true;
            this.stateHeaders.chooseSolution = false;
            return;
        }
        this.stateHeaders.isJumping = !this.stateHeaders.isJumping;
        this.stateHeaders.chooseSolution = !this.stateHeaders.chooseSolution;
    }

    bookNow(): void {
        if (this.bookingSolutions && this.bookingSolutions[this.activeSolution] && this.bookingSolutions[this.activeSolution].componnent) {
            const modalRef: NgbModalRef = this.modalService.open(this.bookingSolutions[this.activeSolution].componnent, { centered: true, windowClass: 'demo-booking-popup', size: 'lg' });
            this._subscription = modalRef.componentInstance.bookingIsCreated.subscribe((data: any) => {
                this.createNewTicketTestBooking(data);
            });
        }
    }
}
