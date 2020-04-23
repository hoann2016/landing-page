import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { StepService } from 'app/features/services/step.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-home-step5',
    styleUrls: ['./step5.component.scss'],
    templateUrl: './step5.component.html',
})

export class Step5Component implements OnInit {
    stepBookingData: any;
    payMethod: string = 'pay-now';
    total: number = 0;
    price: number = 0;
    @Output('createNewTicketTestBooking') createNewTicketTestBooking: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private stepService: StepService,
        private translateService: TranslateService
    ) { }

    ngOnInit() {
        this.stepBookingData = this.stepService.testBookingData();
        this.total = this.stepBookingData.demoPrice * this.stepBookingData.quantity;
        this.onChange(this.payMethod);
        this.stepBookingData.appointmentDate = this.translateService.instant("Common." + this.stepBookingData.selectedDOW);
    }
    
    goToStep(step: number, prev: boolean = false) {
        this.stepService.changeStep(step);
        if (!prev) {
            this.createNewTicketTestBooking.emit(true);
        }
    }

    onChange(event: any): void {
        this.payMethod = event;
        if (this.payMethod === 'pay-now') {
            this.price = this.total - (this.total * 10 / 100);
        } else {
            this.price = this.total;
        }
    }
}
